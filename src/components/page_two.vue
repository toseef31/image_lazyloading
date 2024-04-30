<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template> 


    <div ref="section" style="width: 60vw; margin: 0 auto; padding: 0; box-sizing: border-box;">
      <vue-element-loading :active="isLoading" :is-full-screen="true"/>
  
      <b-card v-if="showSearch" no-body class="no-border">         
             <b-card-text>
                          <div class="row">
                              <div class="col-md-9">
                                  <div class="results-left">
                                      <div id="layOut">
                                          <h1 class="mainH1">Find a MUSC Hollings Cancer Center Researcher</h1>                                      
                                          <div class="mainH3_ pb-10 pl-3">
                                          {{search_results}}
                                            </div> 
                                            <!-- start  -->
                                            <b-container  fluid>
                                              <!-- <div class="" v-for="dataObj in selectedRESEARCHERSLIST" :key="dataObj.EMAIL"> -->
                                                <div class="list_item" v-for="dataObj in selectedRESEARCHERS_LIST" :key="dataObj.EMAIL">
                                                                                              
      <!-- Top Level Row -->
      <b-row>
        <!-- First 3 Columns Wide -->
       
        <b-col cols="3" class="py-0">
          <!-- Content here -->
          <div>
            <img v-bind:src="dataObj.THUMBNAIL" class="person-image clickable-image" @click.once= "loadSelectedResearcher(dataObj)" @error="imageLoadError" alt="Person Image">
            <!-- <img v-bind:src="dataObj.THUMBNAIL" class="person-image clickable-image" @click.once= "loadSelectedResearcher(dataObj)" @error="imageLoadError" alt="Person Image">
        
            <img  v-lazy ="dataObj.THUMBNAIL" class="person-image clickable-image" @click.once= "loadSelectedResearcher(dataObj)" @error="imageLoadError" alt="Person Image">
        
            <img  v-lazy ="img"  class="person-image clickable-image" @click.once= "loadSelectedResearcher(dataObj)" @error="imageLoadError" alt="Person Image">
            
  
            <img  v-lazy ="dataObj.THUMBNAIL" class="person-image clickable-image" @click.once= "loadSelectedResearcher(dataObj)" @error="imageLoadError" alt="Person Image">
  
           
           
           
            <img v-lazy="imageUrl" alt="Image">  -->
           
          </div>
        </b-col>
  
        <!-- Second 9 Columns Wide -->
        <b-col cols="9" class="py-0">
          <b-row>
            <b-col cols="12" class="py-0" >
                  <div class="container pt-2 pl-0 pb-10">  
                <h4>
                <a class="my-custom-link " @click="loadSelectedResearcher(dataObj)" >{{ dataObj.PRIMARY_NAME }} </a>
                </h4>
             
  
                <!-- <h4><b-button style="text-align: left; width: 100%;" class="custom-link-button" variant="link" @click="loadSelectedResearcher_parent(dataObj)">{{ dataObj.PRIMARY_NAME }}</b-button></h4> -->
               </div>
            </b-col>
            <!-- Nested Row Split into 6 and 6 Columns -->
            <b-col cols="6" class="pl-4">
              <div >
              
                <!-- <h4><b-button style="text-align: left; width: 100%;" class="custom-link-button" variant="link" @click="loadSelectedResearcher_parent(dataObj)">{{ dataObj.PRIMARY_NAME }}</b-button></h4> -->
                <div class="py-0 ">
                  <h5 class ="mainH5_">Department</h5>
                  <ul class="work mainH5_sub" style="list-style: none;">
                      <li><i class="fa fa-angle-double-right" ></i> {{dataObj.DEPARTMENT}}</li>
                  </ul>
              </div>
              <div>
                  <h5  class ="mainH5_">Program</h5>
                  <ul class="work mainH5_sub" style="list-style: none;">
                      <li><i class="fa fa-angle-double-right"> </i> {{dataObj.PROGRAM}}</li>
                  </ul>
              </div>
             
              </div>
            </b-col>
            <b-col cols="6" class="py-0">
              <div >
               
                <h5  class ="mainH5_">Rank</h5>
              <ul class="work mainH5_sub" style="list-style: none;">
                  <li><i class="fa fa-angle-double-right"></i> {{dataObj.ACADEMIC_TITLE}}</li>
              </ul>
              <!-- <h5>Membership</h5>
              <ul class="work" style="list-style: none;">
                  <li><i class="fa fa-angle-double-right"></i> {{dataObj.MEMBERSHIP}}</li>
              </ul> -->
              <h5  class ="mainH5_">College</h5>
              <ul class="work mainH5_sub" style="list-style: none;">
                  <li><i class="fa fa-angle-double-right"></i> {{dataObj.COLLEGE}}</li>
              </ul>
              </div>
            </b-col>
  
            <!-- Row Spanning Entire 9 Columns -->
            <b-col cols="12" class="pl-4">
              <div >
                <h5  class ="mainH5_">Cancer Focus</h5>                  
                  <ul class="work mainH5_sub" style="list-style: none;">
                      <li> {{dataObj.CANCER_FOCUS }}</li>
                  </ul>
              
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    </b-container>
                                            <!-- end -->
                                            
  
                                            
  
  
                                      </div>                  
                                  </div>                
                              </div>              
                <div class="col-md-3">
                    <!-- <b-button   variant="primary" @click="OnClicked('LEADERSHIP')" >Leadership</b-button>
                    <b-button  variant="primary"  @click="OnClicked('ALL')" >ALL</b-button>
                    <b-button   variant="primary" @click="OnClicked('Cancer_Control')" >Cancer Control</b-button>
                    <b-button   variant="primary" @click="OnClicked('Developmental_Cancer_Therapeutics')" >Developmental Cancer Therapeutics</b-button>
                    <b-button  variant="primary"  @click="OnClicked('Cancer_Biology_Immunology')" >Cancer Biology & Immunology</b-button> -->
  
                    <div class="mb-3" role="group">
                        <div>
                          <br>
                  <br>
                  <br>
                 <h5>Search</h5>
                 3
                </div>
  
                    <label for="program" class="text-info mb-2">Program:</label>
                    1
                    <b-form-select :options="programs" v-on:change="getSelectedProgramItem"></b-form-select>
                2    
                </div>
                    <div role="group" >       
        <label for="last-name" class="text-info mb-2">Last Name:</label>
        <b-form-input v-model="search_last_name" id="last-name" trim @keyup.enter="OnClicked('Name_Search')"></b-form-input>
      </div>
  
      <div class="mt-4">
        <b-button  class="view-profile-btn"  @click="OnClicked('Name_Search')" >Search</b-button> 
      </div>
  
                      <!-- <SearchBar /> -->
                  </div>
                          </div>
  
                      </b-card-text>             
        </b-card>       
  </div>
     
      
  
   
  </template>
  
 
  <script>
   
    import axios from "axios";
  
  
  
      export default {
      components: {
   
    //  member_ProfileSheet,
    //  profileSheet
    },
          name: 'TabComponent',
          data() {
              return {
                programs: [
                { value: "", text: "" },                
                { value: "ALL", text: "All" },
                { value: "CBI", text: "Cancer Biology & Immunology" },
                { value: "CC", text: "Cancer Control" },
                { value: "DCT", text: "Developmental Cancer Therapeutics" }
                  
        
      ],
           search_last_name:'',
           searchLogic:'ALL',
           imageUrl: 'https://researchers.hcc.musc.edu/images/photos/noimageavailable.jpg',
           isLoading: true,
           MemberID: null,
           ProgramID: null,
           RESEARCHERS_LIST:[],
           search_results: "Search results for",
              }
  
          },
          beforeMount() {
           // alert(BeforeMount)
           // this.loadResearchersList("LEADERSHIP");
  },
  
    
     mounted() {
    this.isLoading = false;
    },
    unmounted () {
      //window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
  
       loadSelectedResearcher(arg){      
       let splitName = arg.EMAIL.split('@')
       this.MemberID = splitName[0] 
    
          window.scrollTo(0, 0);    
       this.$router.push({path: '/ProfilePage', query: { id: splitName[0], ProgramID: this.ProgramID }})
    
    
    
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
        //  ...mapActions(['updateVariable']),  // Map the action to a method
         updateMyVariable() {
        this.updateVariable('new value');  // Dispatch the action to update the variable
       },
          handleScroll(){
  
          },
  
          OnNavClicked(arg){
            switch (arg) {
              case "Back":
            
              this.showMemberIDProfile = false
              this.showSpinner = false
              this.showSearch = true
              this.showBack = false
            //  this.$router.replace({'query': null}); 
               this.$router.replace('/')
               this.searchLogic = "LEADERSHIP"
               this.loadResearchersList("LEADERSHIP");
            }
  
          },
          programLink(arg){
          if(arg === "Cancer Biology & Immunology"){
            window.open('https://hollingscancercenter.musc.edu/research/programs/cancer-biology-immunology', '_blank');
          }
  
          if(arg === "Cancer Control"){
            window.open('https://hollingscancercenter.musc.edu/research/programs/cancer-control', '_blank');
          }
  
          if(arg === "Developmental Cancer Therapeutics"){
            window.open('https://hollingscancercenter.musc.edu/research/programs/cancer-therapeutics', '_blank');
          }        
  
  
          
  
        },
  
            getSelectedProgramItem(arg){
                this.searchLogic = arg
  
           //  alert(arg);
            },
  
  
            OnClicked(arg){
                this.searchLogic = arg
            },
  
            imageLoadError(event){
            event.target.src = "https://researchers.hcc.musc.edu/images/photos/noimageavailable.jpg"
            },
         
  
  //runQuery
   
      
          sleep(ms) {
        //makes whoever called sleep for milliseconds specified in ms
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
  
      },
      watch:{
  
         MemberID(newID) {
          localStorage.MemberID = newID;
          alert(newID)
       
       }
  
  
  },
      
      created(){  
    
          this.loadResearchers_List();
          this.showSearch = true
  
         let urlParams = new URLSearchParams(window.location.search)
         if (urlParams.has('ProgramID') === true ){     
         this.searchLogic = urlParams.get('ProgramID')
         this.ProgramID = urlParams.get('ProgramID')
       }
  
       if (urlParams.has('id') === true || urlParams.has('ID') === true ){    
       
        this.search_last_name = urlParams.get('id')
  
        //this.$router.push({path: '/ProfilePage', query: { id: splitName[0], ProgramID: this.ProgramID }})
  
        this.$router.push({path: '/ProfilePage', query: { id: this.search_last_name}})
  
       // this.searchLogic = "Name_Search"
        }
  
  
      },
      computed: {     
     
        selectedRESEARCHERS_LIST(){
          if (this.searchLogic === "CC"){
          this.ProgramID = "CC"
            this.search_results = "Search results for Cancer Control"      
            return this.RESEARCHERS_LIST.filter(item => item.PROGRAM === "Cancer Control");
          //  return this.members
        } else if (this.searchLogic === "CBI"){
          this.ProgramID = "CBI"
            this.search_results = "Search results for Cancer Biology & Immunology"          
            return this.RESEARCHERS_LIST.filter(item => item.PROGRAM === "Cancer Biology & Immunology");
  
        } else if (this.searchLogic === "DCT"){
          this.ProgramID = "DCT"
            this.search_results = "Search results for Developmental Cancer Therapeutics"
          
            return this.RESEARCHERS_LIST.filter(item => item.PROGRAM === "Developmental Cancer Therapeutics");
        }  else if (this.searchLogic === "Name_Search"){
          if (this.search_last_name.length < 3) {
          this.search_results = "Search results for name starts with"
               return this.RESEARCHERS_LIST.filter(item => item.LASTNAME.toLowerCase().startsWith(this.search_last_name.toLowerCase()) );
    
         } else {
          this.search_results = "Search results for name includes"
          return this.RESEARCHERS_LIST.filter(item => item.LASTNAME.toLowerCase().indexOf(this.search_last_name.toLowerCase()) !== -1 );
         }
          } 
  
          else if (this.searchLogic === "ALL"){
          this.ProgramID = "ALL"
           this.search_results = "All Members"
            return this.RESEARCHERS_LIST
          
          } 
  
        else {
          this.search_results = "All Members"
             return this.RESEARCHERS_LIST
           // return this.RESEARCHERS_LIST.filter(item => item.PROGRAM === "Cancer Biology & Immunology");
        }
        },
  
        selectedRESEARCHERSLIST(){  
          if (this.searchLogic === "LEADERSHIP"){
            this.search_results = "Hollings Leaders"
          //  console.log(this.leaders.LEADERSHIPDATA)
           // return this.leaders.LEADERSHIPDATA
        }
  
        if (this.searchLogic === "CC"){
          this.ProgramID = "CC"
            this.search_results = "Search results for Cancer Control"
        
            return this.members.filter(item => item.PROGRAM === "Cancer Control");
          //  return this.members
        }
  
        if (this.searchLogic === "CBI"){
          this.ProgramID = "CBI"
            this.search_results = "Search results for Cancer Biology & Immunology"
            
            return this.members.filter(item => item.PROGRAM === "Cancer Biology & Immunology");
          //  return this.members
        }
  
        if (this.searchLogic === "DCT"){
          this.ProgramID = "DCT"
            this.search_results = "Search results for Developmental Cancer Therapeutics"
          
            return this.members.filter(item => item.PROGRAM === "Developmental Cancer Therapeutics");
          //  return this.members
        }
  
  
      //  if (this.searchLogic === "LEADERSHIP"){          
      //   if (typeof this.RESEARCHERSLIST.RESEARCHERSLIST!== 'undefined' ) {  
      //     if( this.RESEARCHERSLIST.RESEARCHERSLIST.ITEM = "LEADERSHIP"){
      //       this.search_results = "SEARCH RESULTS FOR LEADERSHIP"
      //       console.log(this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.LEADERSHIP))
      //         return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.LEADERSHIP);
      //     }  else {
      //       this.search_results = "SEARCH RESULTS FOR LEADERSHIP"
      //        this.RESEARCHERSLIST.RESEARCHERSLIST = [];
      //       return this.RESEARCHERSLIST.RESEARCHERSLIST
      //     }       
      //     }
      //   }
        if (this.searchLogic === "ALL"){
          this.ProgramID = "ALL"
            this.search_results = "Search results for ALL"
            console.log(this.RESEARCHERSLIST.RESEARCHERSLIST)
            return this.RESEARCHERSLIST.RESEARCHERSLIST
        }
        if (this.searchLogic === "Cancer_Control"){
          this.ProgramID = "CC"
            this.search_results = "Search results for Cancer Control"
            return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.PROGRAM === "Cancer Control");
        }
  
        if (this.searchLogic === "Developmental_Cancer_Therapeutics"){
          this.ProgramID = "DCT"
            this.search_results = "Search results for Developmental Cancer Therapeutics"
            return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.PROGRAM === "Developmental Cancer Therapeutics");
  
  
        }
  
        if (this.searchLogic === "Cancer_Biology_Immunology"){
          this.ProgramID = "CBI"
            this.search_results = "Search results for Cancer Biology & Immunology"
            return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.PROGRAM === "Cancer Biology & Immunology");
        }
  
        if (this.searchLogic === "Email_PART_Search"){
            this.search_results = "Search results for"
            this.showSpinner = false
            return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.EMAIL.toLowerCase().indexOf(this.search_last_name.toLowerCase()) !== -1 );
        }
  
        if (this.searchLogic === "MemberID_Search"){
            this.search_results = "Search results for"
  
           // let email =  this.getEmailAddress(117);
  
        // console.log(Number(this.MemberID) )
  
      //  alert(this.MemberID )
  
            return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.MEMBERID == this.MemberID);
        }
  
  
  
        if (this.searchLogic === "Name_Search"){
     
       if (this.search_last_name.length < 3) {
        this.search_results = "Search results for name starts with:"
             return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.LASTNAME.toLowerCase().startsWith(this.search_last_name.toLowerCase()) );
  
       } else {
        this.search_results = "Search results for name includes"
        return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.LASTNAME.toLowerCase().indexOf(this.search_last_name.toLowerCase()) !== -1 );
       }
  //})
        }
        if (this.searchLogic === "Query_Search"){
         
       if (this.search_last_name_hidden.length < 3) {
        this.search_results = "Search results for name starts with:"
             return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.LASTNAME.toLowerCase().startsWith(this.search_last_name_hidden.toLowerCase()) );
  
       } else {
        this.search_results = "Search results for name includes"
        return this.RESEARCHERSLIST.RESEARCHERSLIST.filter(item => item.LASTNAME.toLowerCase().indexOf(this.search_last_name_hidden.toLowerCase()) !== -1 );
       }
        }        
  
  
        },
  
      sortedLinks: function() {
      function compare(a, b) {
        if (a.ITEM < b.ITEM)
          return -1;
        if (a.ITEM > b.ITEM)
          return 1;
        return 0;
      }
  
      return this.linkItems.sort(compare);
    }
  },
  
     
   
    
      }
    
  
  </script>
  <style scoped>
  @import '../css/hollings_new.css';
  </style>
  
  <style scoped>
  .no-border {
      border: none !important;
  }
  .list_item{
    margin-bottom: 20px; /* Adjust the value to increase or decrease the space between items */
  }
  .clickable-image:hover {
      cursor: pointer;
  }
  .container {
  
      display: flex;
      align-items: center; /* Aligns children (the <a> tag) vertically in the center */
      justify-content: left; /* Centers children horizontally */
      height: 40px; /* Set a specific height for the container */
      border: none !important; /* Optional: adds a border to the container for visibility */
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
  
  myLink 
  {
      color:#FFFFFF;
      cursor:grab;
      font-weight: bold !important;
        
  }
  
   a:link.myMainLink
  {
    color:#0e0404;
  }
  
  a:visited.myMainLink
  {
    color:#0e0404;
  }
  
  a:hover.myMainLink 
  {
    color:#0e0404;
  }
  .grantlist {
    display: flex;
  }
  
  .details-button {
    padding-right: 0px !important; /* Remove default padding */
    font-size: 14px;
    max-width: 10% !important;
    
  }
  
  /* h1 {
    font-variant-caps: unicase;
    color: rgb(0, 183, 255)
  } */
  
  .mainH1_{
    font-weight: 600;
          font-size: 20px;
          border-bottom: solid 1px #444;        
          color: #00447C;
          padding-bottom: 8px;
  }
  .mainH5_{
         font-weight: 600;
          font-size: 18px;          
          color: #00447C;
          padding-bottom: 0px;
          padding-top: 10px;
          font-family: Arial, Helvetica, sans-serif !important;
  }
  
  .mainH5_sub{
         font-weight: 400;
          font-size: 16px;          
          color: #00447C;
          padding-bottom: 0px;
          padding-top: 4px;
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
  
  
      .results-left ol, .results-left ul {
          list-style: none;
          list-style-type: decimal;
          padding-left: 15px;
          margin-top: 0px;
      }
  
      .results-left h1 {
          font-weight: 200;
          font-size: 28px;
          border: none !important;
          /* text-transform: uppercase; */
          color: #00447C;
          padding-bottom: 8px;
      }
      .person-info {
          margin: 20px 0px 7px 0px;
      }
      
      .person-info h5 {
          color: #00447c;
          font-size: 16px;
      }
      
      .person-info hgroup {
          border-bottom: solid 1px #e6e6e6;
          padding-bottom: 10px;
          margin-bottom: 20px;
      }
      
      .person-info hgroup h3 {
          font-size: 21px;
          float: left;
      }
      
      .person-info hgroup h3 a {
          color: #000;
      }
      
      .person-info img {
          border-radius: 4px;
      }
      
      .person-info h5 {
          color: #00447c;
          font-size: 16px;
      }
      
      .person-info .work {
          font-size: 15px;
      }
      
      .person-info .work li {
          margin-top: 10px;
      }
      
      .person-info .view-profile {
          background: #f0f2f3;
          font-size: 14px;
          border: 1px solid #7a99ac;
          padding: 4px 15px 3px;
          border-radius: 4px;
          margin-top: 15px;  
          width: 150px;
      }
      .view-profile-btn{
        background: #00447c !important;
      }
  
      view-profile-btn:hover {
      color: #fff !important;
        text-decoration: none !important;
  }
  
  
    .view-profile:hover {
      background-color: #7a99ac;
      color: rgb(0, 0, 0);
  }
      .person-info p a, .person-info p i {
          color: #337ab7;
      }
      
      .person-info p i {
          margin-right: 5px;
      }
      
      .person-info p {
          font-size: 16px;
          margin-bottom: 10px;
      }
  
    .single-person {
    margin: 20px 0px 7px 0px;
  }
  .search-result-title {
    margin: 0px 0px 7px 0px;
  }
  .search-result-title h5 {
    color: #00447c;
    font-size: 16px;
    /* text-transform: uppercase; */
  }
  .person-detail h3 {
    font-size: 21px;
    text-transform: uppercase;
    margin-bottom: 30px !important;
  }
  .person-detail h3 a {
    color: #000;
    /* border-bottom: 1px solid #e6e6e6; */
    padding-bottom: 10px;
    border: none !important;
  }
  .p-section h5 {
    color: #00447c;
    font-size: 16px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .p-section p {
    font-size: 15px;
    color: #000;
    padding-left: 15px;
    padding-bottom: 10px;
  }
  .p-section .view-profile {
    background: #7a99ac !important;
    /* border: 1px solid #7a99ac !important; */
    padding: 4px 15px 3px;
    border-radius: 4px;
    border: none !important;
  }
  .p-section-right p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .keyword-search h5 {
    font-size: 20px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 400;
    padding: 0 0 10px;
    text-align: center;
    margin: 0px 0 5px 0px !important;
  }
  
  .keyword-search-bar h5 {
    font-size: 20px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 400;
    padding: 0 0 10px;
    text-align: left;
    margin: 0px 0 5px 0px !important;
  }
  
  .search-btn {
    font-style: normal;
    font-size: 13px;
    border-color: #aaa !important;
    background-color: #efefef;
    outline: none !important;
    border: 1px solid transparent !important;
    padding: 3px;
    text-align: center;
    border-radius: 4px;
  }
  
  .search-btn:hover {
    border-color: #999 !important;
    background-color: #e8e8e8 !important;
  }
  .alphabets {
    background-color: #e6e6e6;
    padding: 10px 10px;
    margin-top: 15px;
  }
  .alphabets a {
    display: inline-block;
    color: #00447c;
    font-weight: 700;
    font-size: 14px;
    /* text-transform: uppercase; */
    padding: 5px 3px;
    border: none !important;
  }
  .profileFind-card-text {
      background: #fff !important;
      color: #fff !important ;
      font-family: Arial, Helvetica, sans-serif !important;
      font-size: 18px !important;
     }
     button.btn.btn-primary2 {
      width: 100%;
      margin: 5px 0;
      background: #b9dbe5;
      border-color: #00447c;
      color: #00447c;
      padding: 6px;
      margin-top: 25px;
      margin-bottom: 25px;
      font-weight: bold !important;
  }
  a:hover.nav-link
  {
      /* color:#7a99ac !important; */
      cursor:grab;
      font-weight: bold !important;
        
  }
  .link-like {
      background: none;
      border: none;
      color: #00447C;
      font-size: 22px !important;
      text-decoration: underline;
      cursor: pointer;
      padding: 0;
      font: inherit;
    }
  
    .primary_name{
    color:#00447C;
    font-size: 22px !important;
  }
  
  btn-default:hover{
    font-weight: bold !important;
  }
  .custom-link-button {
      background-color: red; /* Ensures no background color */
      border: none;                  /* No borders */
      color: #00447C;                /* Sets the text color */
      font-size: 22px;               /* Sets the font size */
      font-weight: bold;             /* Heavier font weight */
      text-decoration: underline;    /* Underline to mimic a hyperlink */
      padding: 0.375rem 0.75rem; 
      width: 100%    /* Bootstrap's default padding for buttons */
  }
  
  
  .custom-link-button:hover, .custom-link-button:focus {
      background-color: transparent; /* Keeps background transparent on hover/focus */
      color: #003366;                /* Darker blue color for hover state */
      text-decoration: none;         /* Optional: remove underline on hover */
  }
  
  
  .person-info .row > div {
      margin-bottom: 20px; /* Uniform bottom margin for all direct children of .row */
  }
  
  .person-info h4, .person-info h5 {
      margin: 10px 0; /* Uniform margin for headers */
  }
  
  .person-info ul {
      padding-left: 20px; /* Adjust padding for lists */
      margin: 5px 0; /* Uniform margin for lists */
  }
  
  .person-image {
      width: 100%; /* Ensure images take the full width of the container */
      height: auto; /* Maintain aspect ratio */
      margin-bottom: 15px; /* Space below images */
  }
  
  .work li {
      margin-bottom: 5px; /* Spacing between list items */
  }
  </style>
  
  