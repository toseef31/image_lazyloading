<template>
    <div class="container" style="width: 50vw; margin: 0 auto; padding: 0; box-sizing: border-box;">

        <div class="row">
            <h1 class="mainH1 pt-3">Find a MUSC Hollings Cancer Center Researcher</h1>  
            <div class="mainH3_ pb-10 pl-3">
                                          {{search_results}}
                                            </div>    
        <div class="col-md-9">

            <div class="list_item" v-for="dataObj in selectedRESEARCHERS_LIST" :key="dataObj.EMAIL">

        <div class="row">
        <div class="col-md-3">
          <!-- Column 1 content -->
          <img @error="imageLoadError" 
          @click.once= "loadSelectedResearcher(dataObj)"
          class="person-image clickable-image" 
          alt="Person Image"
          :style="{ width: imageSize + 'px', height: 'auto' }" 
          v-lazy= "dataObj.THUMBNAIL">
        </div>
        <div class="col-md-9">
      
            <div class="row">
            <!-- <b-col cols="12" class="py-0" > -->
                <div class="col-md-12">
                  <div class="container pt-2 pl-0 pb-10">  
                <h4>
                <a class="my-custom-link " @click="loadSelectedResearcher('dataObj')" >{{  dataObj.PRIMARY_NAME }} </a>
                </h4>
             
  
                <!-- <h4><b-button style="text-align: left; width: 100%;" class="custom-link-button" variant="link" @click="loadSelectedResearcher_parent(dataObj)">{{ dataObj.PRIMARY_NAME }}</b-button></h4> -->
               </div>
            </div> <!-- </b-col> -->

            <!-- Nested Row Split into 6 and 6 Columns 
            <b-col cols="6" class="pl-4">-->
                <div class="col-md-6 pl-4">
              <div >
              
                <!-- <h4><b-button style="text-align: left; width: 100%;" class="custom-link-button" variant="link" @click="loadSelectedResearcher_parent(dataObj)">{{ dataObj.PRIMARY_NAME }}</b-button></h4> -->
                <div class="py-0 ">
                  <h5 class ="mainH5">Department</h5>
                  <ul class="mainH5_sub" style="list-style: none;">
                      <li> <font-awesome-icon icon="angle-double-right" /> {{ dataObj.DEPARTMENT }}</li>
                  </ul>
              </div>
              <div>
                  <h5  class ="mainH5_">Program</h5>
                  <ul class="mainH5_sub" style="list-style: none;">
                      <li> <font-awesome-icon icon="angle-double-right" /> {{ dataObj.PROGRAM }} </li>
                  </ul>
              </div>
             
              </div>
            </div> <!-- </b-col> 
            <b-col cols="6" class="py-0">-->
                <div class="col-md-6 py-0">
              <div >
               
                <h5  class ="mainH5_">Rank</h5>
               <ul class="mainH5_sub" style="list-style: none;">
                  <li> <font-awesome-icon icon="angle-double-right" />  {{ dataObj.ACADEMIC_TITLE }} </li>
              </ul>
              <!-- <h5>Membership</h5>
              <ul class="work" style="list-style: none;">
                  <li><i class="fa fa-angle-double-right"></i> {{dataObj.MEMBERSHIP}}</li>
              </ul> -->
              <h5  class ="mainH5_">College</h5>
              <ul class="mainH5_sub" style="list-style: none;">
                
                  <li> <font-awesome-icon icon="angle-double-right" /> {{ dataObj.COLLEGE }} </li>
              </ul>
              </div>
            </div>
            <!-- </b-col> -->
  
            <!-- Row Spanning Entire 9 Columns
            <b-col cols="12" class="pl-4"> -->
                <div class="col-md-12 py-0">
              <div >
                <h5  class ="mainH5_">Cancer Focus</h5>                  
                  <ul class="mainH5_sub" style="list-style: none;">
                      <li class="mainH5_sub" > {{ dataObj.CANCER_FOCUS }} </li>
                  </ul>
              
              </div>
            </div>
            <!-- </b-col> -->
         
           </div>  <!-- <div class="row"> -->

          <!-- Column 2 content -->
     
        </div>
       
     
    </div>
            </div>
            </div>
           <div class="col-md-3">
            <div>
                  <br>
                  <br>
                  <br>
                 <h5>Search</h5>
                </div>
                <label for="program" class="text-info mb-2">Program:</label>
                <div>                 
                    <select v-model="selectedProgram" @change="getSelectedProgramItem" class="form-select">
                    <option value="">Select a program</option>
                    <option v-for="program in programs" :key="program.value" :value="program.value">
                    {{ program.text }}
                   </option>
                   </select>
             
  </div>
            <div class = "mt-3 " role="group" >       
       <label for="last-name" class="text-info mb-2">Last Name:</label>
     <!-- <b-form-input v-model="search_last_name" id="last-name" trim @keyup.enter="OnClicked('Name_Search')"></b-form-input> -->
      <!-- <input type="text" v-model="search_last_name" class="form-control" placeholder="Enter something"  @keyup.enter="OnClicked('Name_Search')"> -->
    </div>
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" v-model="search_last_name" placeholder="Name" aria-label="Name" @keyup.enter="OnClicked('Name_Search')" aria-describedby="basic-addon1">
  

</div>
<button class="btn btn-primary" @click="OnClicked('Name_Search')" style="width: 100%;">Search</button>
            </div>
          
        </div>


    
      <div class="row">
        <div class="col-md-12">
          <!-- Button -->
       
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import axios from "axios";

  export default {
    components: {

  },
    name: 'MyPage',
    data(){
    return {
        imageSize: 160,
        search_results: "All Members",
        searchLogic:"",
        search_last_name:"",
        selectedProgram:"",
        RESEARCHERS_LIST:[],
        dataObj: [{"CANCER_FOCUS":"12345", "DEPARTMENT" : "DEPARTMENT", "PRIMARY_NAME" : "", "COLLEGE" : "", "ACADEMIC_TITLE" : "",  "PROGRAM" : ""}] ,
        programs: [
              { value: "", text: "" },                
              { value: "ALL", text: "All" },
              { value: "CBI", text: "Cancer Biology & Immunology" },
              { value: "CC", text: "Cancer Control" },
              { value: "DCT", text: "Developmental Cancer Therapeutics" }
    ]
    }
    },
    computed: {
        selectedRESEARCHERS_LIST(){
        return this.RESEARCHERS_LIST
    },
  },
  
  methods: {
    imageLoadError(event){
            event.target.src = "https://researchers.hcc.musc.edu/images/photos/noimageavailable.jpg"
            },
    getImage(){
        return 'https://researchers.hcc.musc.edu/images/photos/carpente.jpg'
    },
    loadSelectedResearcher(){
        console.log("ok")
    },
    OnClicked(arg){
        alert(this.search_last_name)
              this.searchLogic = arg
          },

          getSelectedProgramItem() {
            alert(this.selectedProgram)
      // Handle the selected program item here
      console.log('Selected program:', this.selectedProgram);
    },
    async  loadResearchers_List(){       
       self = this
       await axios
       .get("https://adminapi20220513111902.azurewebsites.net/api/ResearchersList")
       .then(res => {  
       
        let response = JSON.parse(res.data)
      //  self.RESEARCHERS_LIST = JSON.parse(res.data).RESEARCHERSLIST ;
        self.RESEARCHERS_LIST = response.RESEARCHERSLIST;
        console.log(self.RESEARCHERS_LIST)
  
     
           })
         .catch(err => {
           console.log(err);
      //     alert('An error has occured and the Administrator has been notified loadResearchersList')
      //     // console.log(err);
        });
      
      //     this.showSpinner = false
      
            },
},
created(){
    this.searchLogic === "ALL"
    this.loadResearchers_List();
},
};
  </script>
  
  <style>
  /* Add any custom styles here */
 .form-select{
    color: #00447C;
   
 }
.mainH1{
    font-size: 26px; 
    font-weight: 400;
    color: #00447C;
    font-family: Arial, Helvetica, sans-serif !important;
  
}
  .mainH1_{
    font-weight: 600;
          font-size: 20px;
          border-bottom: solid 1px #444;        
          color: #00447C;
          padding-bottom: 8px;
          font-family: Arial, Helvetica, sans-serif !important;
  }
  .mainH5_{
         font-weight: 600;
          font-size: 18px;          
          color: #00447C;
          padding-bottom: 0px;
          padding-top: 10px;
          font-family: Arial, Helvetica, sans-serif !important;
  }

  .mainH5_sub ul{
         font-weight: 600;
          font-size: 16px;          
          color: #00447C;
          padding-bottom: 0px;
          padding-top: 0px;
          font-family: Arial, Helvetica, sans-serif !important;
          margin-bottom: 15px; /* Spacing between list items */
  }
  
 
.mainH5_sub li{
         font-weight: 400;
          font-size: 16px;          
          color: #00447C;
          padding-bottom: 0px;
          padding-top: 0px;
          font-family: Arial, Helvetica, sans-serif !important;
          margin-bottom: 15px; /* Spacing between list items */
  }
  
  .mainH5_sub{
         font-weight: 600;
          font-size: 16px;          
          color: #00447C;
          padding-bottom: 0px;
          padding-top: 0px;
          font-family: Arial, Helvetica, sans-serif !important;
         
  }
  
  
  .mainH3_{
          font-weight: 400;
          font-size: 24px;              
          color: #00447C;
          padding-bottom: 20px;
          padding-top: 0px;
  }
  
  .mainH4_{
    font-weight: 600;
          font-size: 24px;              
          color: #00447C;
          padding-bottom: 0px;
  }
  
  .my-custom-link {
    
    font-weight: 600;
    cursor: pointer;       /* Makes the cursor appear as a pointer */
    text-decoration: none; /* Removes the underline from the link */
    font-family: Arial, sans-serif; /* Sets the font family */
    font-size: 24px;       /* Sets the font size */
    color: #00447c; 
    border: none !important;        /* Sets the text color, using Bootstrap's default link color for consistency */
}

.my-custom-link:hover {
    text-decoration: underline; /* Adds an underline on hover */
    color: #0056b3;             /* Changes the color on hover, slightly darker than the default */
}
.clickable-image:hover {
      cursor: pointer;
  }
  </style>

  