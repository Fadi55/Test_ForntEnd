import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar-table',
  templateUrl: './toolbar-table.component.html',
  styleUrls: ['./toolbar-table.component.scss']
})
export class ToolbarTableComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @Output() formSent: EventEmitter<void> = new EventEmitter();
  @Output() formSentsearch: EventEmitter<void> = new EventEmitter();
  text1:any
  text2:any
  text3:any
  text4:any
  text5:any
  text6:any
  textCDL
  textMedical
  medDays
  cdlDays
  idState
  mvrDays
  textMVR
  finalDate
  finaDateHired
  inquiryForm = this.formBuilder.group({
		full_name: new FormControl('', [Validators.required]),
		CDL: new FormControl('',  [Validators.required]),
    Phone: new FormControl('',  [Validators.required]),
    ssn: new FormControl('',  [Validators.required]),
    dob: new FormControl('',  [Validators.required]),
    state: new FormControl('',  [Validators.required]),
    img: new FormControl('',  [Validators.required]),
    hired: new FormControl('',  [Validators.required]),
	 
	});
  selectedname
 
  
  items = [
    {key: "1", value: "Kentucky"},
    {key: "2", value: "Louisiana"},
    {key: "3", value: "Nevada"},
  ]


  public selectedOption = "Kentucky";
  searchText :any;
  searchtextsend
  show: boolean = false;
  fileToUpload: any;
  imageUrl: any;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
 


  }
  onChangeMed(e){
    this.medDays=e.key*365
 
  }
  onChangeMVR(e){
    this.cdlDays=e.key*365
    
  }
  onChangeCDL(e){
    this.mvrDays=e.key*365
 
  }
  onChange(e) {
    // Fired one time when the focus outside the input, not need ngmodel value for fired
  
    
    this.formSentsearch.emit(e.target.value);
  }
  showModal(){
 
    this.show = !this.show;
    
  }
   
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  onDateSelect(event) {
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
     this.finalDate = year + "-" + month + "-" + day;
 
   }

   onDateSelect1(event) {
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
     this.finaDateHired = year + "-" + month + "-" + day;
 
   }

  onSubmit() {
    this.inquiryForm.value.state= this.idState
    this.inquiryForm.value.dob= this.finalDate
    this.inquiryForm.value.MVRexp= this.mvrDays
    this.inquiryForm.value.MEDexp= this.medDays
    this.inquiryForm.value.CDLexp= this.cdlDays
    this.inquiryForm.value.hired= this.finaDateHired
    
    this.formSent.emit(this.inquiryForm.value);
   
    this.text1=""
    this.text2=""
    this.text3=""
    this.text4=""
    this.text5=""
    this.text6 =""
	}
  public onSave() {
    this.closebutton.nativeElement.click();
  }
  onChangeState(e){
   this.idState=this.selectedname.key
   
  }
   
}
