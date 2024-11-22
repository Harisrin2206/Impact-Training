import { FormGroup } from "@angular/forms";
export function ConfirmedValidator (
  controlName:string,matchingName:string)

{
  return(formgroup:FormGroup)=>{
    const control=formgroup.controls[controlName];
    const matching=formgroup.controls[matchingName];
if(control.value!==matching.value){
  matching.setErrors({confirmedValidator:true})
}
else{
  matching.setErrors(null)
}
  }
}
