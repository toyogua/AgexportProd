import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = "http://aeapi.iflexsoftware.com";
  //apiUrl = "http://dev.openmindsit.com/AgexportAPI/public";
  response: any;
  session: any;
  stored: any;
  device_id: any;
  validationData: any;
  validated_phone: any;
  offerParam = { role: null, session_id: null};
  method: string;

  constructor(public http: HttpClient, private storage: Storage, private device: Device) {
    console.log('Hello RestProvider Provider');
  }

  public settings(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/settings.json/').subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    })
  }
  public helpLogin(helpData){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/contact/helpLogin.json/', JSON.stringify(helpData), {
        headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8')
      }).subscribe(
        data => {
          resolve(data)
        },
        error => reject(error.error.error.message),
      )
    })
  }
  public activate(credentials) {
    
    return new Promise((resolve, reject) => {
      console.log("url:", this.apiUrl + '/contact/invite.json/' + credentials.invitation_code);
      this.http.post(this.apiUrl + '/contact/invite.json/' + credentials.invitation_code, '{"phone":"' + credentials.phone + '"}', {
        headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8')
      }).subscribe(
        data => {
          this.response = data
          this.session = this.response.contact;
          this.session.phone = credentials.phone;
          console.log("Save Phone on Session:", JSON.stringify(this.session));
          this.storage.set('session', this.session);
          resolve(data)
        },
        error => reject(error.error.error.message),
      )
    })
  }
  public sms(){
    return new Promise((resolve, reject) => {
      this.storage.get("session").then((session)=>{
        const credentials = {invitation_code : session.invitation_code, phone: session.phone };
        this.http.post(this.apiUrl + '/contact/invite.json/' + credentials.invitation_code, '{"phone":"' + credentials.phone + '"}', {
          headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8')
        }).subscribe(
          data => {
            this.response = data
            this.session = this.response.contact;
            this.session.phone = credentials.phone;
            console.log("Save Phone on Session:", JSON.stringify(this.session));
            this.storage.set('session', this.session);
            resolve(data)
          },
          error => reject(error.error.error.message),
        )
      })
    })
  }

  public validate(validation) {
    return new Promise((resolve, reject) => {
      this.storage.get("session").then((val) => {
        this.stored = val;
      });
       this.validationData = {
        c_contact_id: this.session.c_contact_id,
        device_id: this.device.uuid,
        serial: this.device.uuid,
        manufacturer: this.device.model,
        platform: this.device.platform,
        validated_phone: validation.phone
      }
      console.log("validation Data", JSON.stringify(this.validationData));
      this.http.post(this.apiUrl + '/contact/validate.json/', JSON.stringify(this.validationData), {
        headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8')
      }).subscribe(
        (data) => {
          resolve(data)
        },
        (error) => {
          reject(error.error.error.message);
        });
    })
  }

  public confirm(confirmData){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/device/confirm.json?c_contact_id='+confirmData.c_contact_id+'&device_id='+confirmData.device_id+'&serial='+confirmData.serial)
      .subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      })
    });
  }

  public profile(){
    return new Promise((resolve, reject) => {
      this.storage.get("session_id").then((session_id)=>{
        console.log(this.apiUrl +'/contact.json/'+session_id+'/profile');
        this.http.get(this.apiUrl +'/contact.json/'+session_id+'/profile').subscribe(
          (data) => {
            this.response = data;
            this.storage.set("profile", this.response.data);
            this.storage.set("role", this.response.data.role);
            this.storage.set("type", this.response.data.type);
            const employeeIndex: string[] =[];
            if (this.response.data.contacts != undefined) {
              this.response.data.contacts.forEach(element => {
                employeeIndex.push(element.index);
              });
              this.storage.set("employeeIndex", employeeIndex);
              console.log(JSON.stringify(employeeIndex));
            }
            resolve(data);
          }, (error) => {
            reject(error);
          }
        )
      })

    })
    
  }
  public deleteContact(c_contact_id){
    return new Promise((resolve, reject)=>{
      this.storage.get("session_id").then((session_id)=>{
        console.log("Delete URL:", this.apiUrl+"/contact.json?c_contact_id="+c_contact_id+"&session_id="+session_id );
        this.http.delete(this.apiUrl+"/contact.json?c_contact_id="+c_contact_id+"&session_id="+session_id,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8')
        }).subscribe((data)=>{
          console.log("Contact Delete:", JSON.stringify(data));
          resolve(data); 
        }, (error) => {
          console.log("Contact Delete ERROR:", JSON.stringify(error));
          reject(error); 
        })
      })

    })
  }

  public offer(){
    return new Promise((resolve, reject)=>{
      this.storage.get("role").then((storedRole) => {
        this.offerParam.role = storedRole;
        this.storage.get("session_id").then((session_id) => {
          this.offerParam.session_id = session_id;
          if (this.offerParam.role == "Regular") {
            this.method = "/offer.json"; 
          } else {
            this.method = "/offer.json/"+this.offerParam.session_id+"/myOffers";
          }
          console.log("Offer URI:",this.apiUrl+this.method);
          this.http.get(this.apiUrl+this.method).subscribe(
            data => {
              resolve(data);
            },
            error => {
              reject(error);
            }
          )
        });
     });
    })
  }

  public events(){
    return new Promise((resolve, reject) => {
      this.storage.get("session_id").then((session_id) => {
        this.http.get(this.apiUrl+'/activity.json/'+session_id+'/myActivities').subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        )
      });
    })
  }
  public eventConfirmation(payload){
    return new Promise((resolve, reject) =>{
      this.http.post(this.apiUrl + '/activity/assist.json/', JSON.stringify(payload), {
        headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8')
      }).subscribe(
        (data) => {
          resolve(data)
        },
        (error) => {
          reject(error.error.error.message);
        });
    });

  }

  transaction(trxData){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+"/transaction.json", JSON.stringify(trxData),
      {headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8') }
      ).subscribe(data => {
        resolve(data)
      }, error => {
        reject(error)
      })
    })
  }

  contactAdd(contactData){
    return new Promise((resolve,reject) => {
      this.storage.get("profile").then((profile)=>{
        contactData.c_bpartner_id = profile.Company.c_bpartner_id;
        this.http.post(this.apiUrl+"/contact/add.json",JSON.stringify(contactData),  
        {headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8') }
        ).subscribe((data)=>{
          resolve(data);
        }, error => {
          
          resolve(error);
        })
      });
    })
  }
  contactUpdate(contacatData){
    console.log("Update:", JSON.stringify(contacatData));
    return new Promise((resolve,reject)=> {
      this.http.put(this.apiUrl+"/contact.json",JSON.stringify(contacatData),
      {headers: new HttpHeaders().set('Content-type', 'application/json; charset=utf-8') }
      ).subscribe(data=>{
        resolve(data);
      }, error=> {
        reject(error);
      })
    })
  }

  catalogs(){
    return new Promise((resolve, reject)=> {
      this.storage.get("catalogs").then((catalogs)=>{
        if (catalogs == undefined) {
          this.http.get(this.apiUrl+"/contact/catalog.json")
          .subscribe((data)=>{
            this.storage.set("catalog", data);
            resolve(data);
          }, error =>{
            if (error.status == '0' ){
              console.log("Catalog not connected");
            }
            reject(error);
          })
        } else {
          resolve(catalogs);
          reject(null);
        }

      })
    })

  }


}
