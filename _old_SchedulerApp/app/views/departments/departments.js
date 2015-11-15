// "use strict";
// /* globals this*/
// var observableArray = require("data/observable-array");
// var navigation = require("../../shared/navigation");
// var classSearch = require("../../models/class-search");
// var actionBarModule = require("ui/action-bar");

// var frameModule = require("ui/frame");

// var allDepartments;
// var session;
// function onPageLoaded(args) {
//   var page = args.object;
//   if(page && page.navigationContext) {
//     session = args.object.navigationContext;
//   }
//   session.getDepartments().then(function(departments) {

//     console.log(JSON.stringify(departments));
//     var array = new observableArray.ObservableArray();
//     departments.forEach(function(session) {
//       array.push(session);
//     });
//     page.bindingContext = {sessionName: session.name, myItems: array};
//     allDepartments = array;
//   });
// }
// exports.onPageLoaded = onPageLoaded;
// var numClicked = 0;
// exports.onTap = function(a) {
//   var dept = allDepartments.getItem(a.index);
//   navigation.goToCourses({courses:dept.getCourses(), session:session, title:dept.name});
//   // dept.getCourses().then(function(courses) {
//   //   console.log("got courses for" + dept.name);
//   //     navigation.goToCourses({courses:courses, session:session, title:dept.name});
//   // });
//   //TODO: prevent from tapping anything else
// };
// exports.navigatedTo =  function(eventData) {
//     session = eventData.object.navigationContext;
// };

// exports.onTapCart = function(eventData) {
//   var coursesInCart = [];
//   session.departments.forEach(function(department) {
//     if(department.courses) {
//       department.courses.forEach(function(course) {

//         var goodSections = [];
//         if(course.sections) {
//           course.sections.forEach(function(section) {
//             if(section.inCart) {
//               goodSections.push(section);
//             }
//           });
//         }
//         if(goodSections.length > 0) {
//           var sanitizedCourse = new classSearch.Course(course);
//           sanitizedCourse.sections = goodSections;
//           coursesInCart.push(sanitizedCourse);
//         }
//       });
//     }
//   });
//   navigation.goToCourses({courses:coursesInCart, session:session, title:"Cart"});
// };