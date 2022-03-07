const male = document.getElementById("maleRadio");
const female = document.getElementById("femaleRadio");
let title = document.getElementById("title");
let text = document.getElementById("text");
let tDate = document.getElementById("dateInput")

let CC;
let DD;
let YY;
let MM;
let day;
let d;


let akanFemale = [
    { english: "Sunday", ghana: "Akosua" },
    { english: "Monday", ghana: "Adwoa" },
    { english: "Tuesday", ghana: "Abenaa" },
    { english: "Wednesday", ghana: "Akua" },
    { english: "Thursday", ghana: "Yaa" },
    { english: "Friday", ghana: "Afua" },
    { english: "Saturday", ghana: "Ama" },
  ];
  
  let akanMale = [
    { english: "Sunday", ghana: "Kwasi" },
    { english: "Monday", ghana: "Kwadwo" },
    { english: "Tuesday", ghana: "Kwabena" },
    { english: "Wednesday", ghana: "Kwaku" },
    { english: "Thursday", ghana: "Yaw" },
    { english: "Friday", ghana: "Kofi" },
    { english: "Saturday", ghana: "Kwame" },
  ];
  
  const getDate = () => {
    document.getElementById("dateInput").addEventListener("change", function () {
      var input = this.value;
      if (input == null){
        alert("Enter Date")
      }
      var dateEntered = new Date(input);
      console.log(input); //e.g. 2015-11-13
      console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
  
      // CC - is the century digits. For example 1989 has CC = 19
      CC = dateEntered.getFullYear();
      CC = CC.toString().substr(0, 2);
      console.log("Decade " + CC);
  
      // YY - is the Year digits (1989 has YY = 89)
      YY = dateEntered.getFullYear();
      YY = YY.toString().substr(2, 4);
      console.log("Year " + YY);
  
      // MM -  is the Month
      MM = dateEntered.getMonth();
      console.log("Month " + MM);
  
      // DD - is the Day of the month
  
      DD = dateEntered.getDate();
      console.log("Day of month " + DD);
  
      day = dateEntered.getDay();
      console.log("Day of week " + day);
  
    });
  };
  