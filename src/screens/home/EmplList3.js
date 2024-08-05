import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../themes/Themes';
import { Icons } from '../../themes/Icons';

import { normalize } from '../../utils/helpers/dimen';
import { Fonts } from '../../themes/Fonts';
import FastImage from 'react-native-fast-image';

const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    profileImg:Icons.worker2,
    position: "Software Engineer",
    department: "Development",
    salary: 70000,
    projects: [
      { projectId: 101, projectName: "Project Alpha" },
      { projectId: 102, projectName: "Project Beta" }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImg:Icons.worker2,

    position: "Software Engineer",
    department: "Management",
    salary: 85000,
    projects: [
      { projectId: 103, projectName: "Project Gamma" }
    ]
  },
  {
    id: 3,
    profileImg:'',
    name: "Alice Johnson",
    position: "UX Designer",
    department: "Design",
    salary: 65000,
    projects: [
      { projectId: 104, projectName: "Project Delta" }
    ]
  },
  {
    id: 4,
    name: "Bob Brown",
    profileImg:Icons.worker2,
    position: "Quality Assurance",
    department: "Testing",
    salary: 60000,
    projects: [
      { projectId: 105, projectName: "Project Epsilon" }
    ]
  },
  {
    id: 5,
    name: "Charlie Black",
    profileImg:null,
    position: "Backend Developer",
    department: "Development",
    salary: 75000,
    projects: [
      { projectId: 106, projectName: "Project Zeta" }
    ]
  },

];


// Component for rendering the list
const EmplList3 = () => {
  const navigation = useNavigation()
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployees] = useState([]);

  //   console.log('employees',employees);
  const toggleActiveStatus = (id) => {
    let arr = []
    setEmployees((prevEmployees) =>
       prevEmployees.map((employee) =>
        employee.id === id ?{ ...employee, isActive: !employee.isActive } : employee
      )
    );
    const updatedEmployee = employees.find(employee => employee.id === id);
    console.log('updatedEmployee',updatedEmployee);
    const toggledEmployee = { ...updatedEmployee, isActive: !updatedEmployee.isActive };
    console.log('toggledEmployee',toggledEmployee);
    
    // arr.push(toggledEmployee)
    // console.log('arr',arr);

    // setSelectedEmployees(preData=>[...preData,toggledEmployee])

    // Check if the employee is already in the selectedEmployees list
    setSelectedEmployees((prevSelectedEmployees) => {
      const isAlreadySelected = prevSelectedEmployees?.some(emp => emp.id === id);
      console.log('isAlreadySelected',isAlreadySelected);

      if (isAlreadySelected) {
        // If already selected, update the employee in the list
        return prevSelectedEmployees.map(emp => 
          emp.id === id ? toggledEmployee : emp
        );
      } else {
        // If not, add the new toggled employee to the list
        return [...prevSelectedEmployees, toggledEmployee];
      }
    });
  };

  
  const positions = [...new Set(employees.map(emp => emp.position))];
  console.log('employees',employees);
  console.log('selectedEmployees', selectedEmployee);


  return (
   <View>
     <View style={styles.header}>
     <Text
          onPress={() => {
            navigation.navigate('Profile',{
                employee:selectedEmployee
              })
          }}
        >{'Header'}</Text>
     </View>
      <FlatList
      data={positions}
      keyExtractor={(item) => item}
      renderItem={({ item: position }) => (
        <View style={styles.positionContainer}>
          <Text style={styles.positionTitle}>{position}</Text>
          {employees.filter(emp => emp.position === position).map((employee) => (
            <TouchableOpacity
            style={{}}
              // key={employee.id}
              onPress={() => {
                // alert(employee.id)
                toggleActiveStatus(employee.id)
              // navigation.navigate('Profile',{
              //   employee:employee
              // })
              }}
            >
              <View style={[styles.userCard,
               employee.isActive ? styles.active : styles.nonactive,
               {
                borderColor:employee.isActive ? '#d0f0c0' : Colors.white,
                borderWidth: employee.isActive ? 4 :0,
                 borderRadius:employee.isActive ? normalize(20) : 0,
                //  borderTopLeftRadius:normalize(20),
                //  borderTopRightRadius:normalize(20)
              }]}>
               <View style={{flexDirection:'row',}}>
             {employee.profileImg == null ||
             employee.profileImg == '' ||
             employee.profileImg == undefined ? null :
             <FastImage
             source={employee.profileImg} style={{
                  height:normalize(30),
                  width:normalize(30),
                  borderRadius:normalize(25),
                  resizeMode:'contain',
                }}/>}
                <Text style={styles.employeeName}>{employee.name}</Text>
               </View>
                <Text style={styles.employeeDetails}>
                  {employee.department} - ${employee.salary}
                </Text>
                <View style={styles.projectList}>
                  <Text style={styles.projectTitle}>Projects:</Text>
                  {employee.projects.map((project) => (
                    <Text key={project.projectId} style={styles.projectName}>
                      - {project.projectName}
                    </Text>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
   </View>
  );
};

const styles = StyleSheet.create({
  positionContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  header:{
    height:normalize(50),
    backgroundColor:Colors.white,
    justifyContent:'center',
    paddingHorizontal:normalize(15)
  },
  userCard: {
    width: '90%',
    height: normalize(120),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: normalize(5),
    padding: normalize(10),
    // borderRadius: normalize(10),
    // elevation: 1,
    shadowColor: Colors.black,
    shadowOpacity: 0,
    // borderBottomEndRadius:normalize(20),
    // borderTopStartRadius:normalize(20),
   
    
  },
  positionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  employeeContainer: {
    marginLeft: 15,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  active: {
    backgroundColor: '#d0f0c0'
  },
  nonactive:{
    backgroundColor:Colors.white
  },
  employeeName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  employeeDetails: {
    color: 'gray',
    marginBottom: 5
  },
  projectList: {
    marginLeft: 10,
    marginTop: 5
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  projectName: {
    fontSize: 14,
    color: '#555'
  }
});

export default EmplList3;
