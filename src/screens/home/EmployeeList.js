import React from 'react';
import { View, Text, FlatList, StyleSheet,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

// Sample employee data
const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "Development", salary: 70000 },
  { id: 2, name: "Jane Smith", position: "Project Manager", department: "Management", salary: 85000 },
  { id: 3, name: "Alice Johnson", position: "UX Designer", department: "Design", salary: 65000 },
  { id: 4, name: "Bob Brown", position: "Quality Assurance", department: "Testing", salary: 60000 },
  { id: 5, name: "Charlie Black", position: "Backend Developer", department: "Development", salary: 75000 },
  { id: 6, name: "Diana White", position: "Data Scientist", department: "Analytics", salary: 90000 },
  { id: 7, name: "Eve Green", position: "Product Manager", department: "Product", salary: 95000 },
  { id: 8, name: "Frank Blue", position: "Frontend Developer", department: "Development", salary: 72000 },
  { id: 9, name: "Grace Red", position: "DevOps Engineer", department: "Infrastructure", salary: 78000 },
  { id: 10, name: "Hank Yellow", position: "Scrum Master", department: "Management", salary: 80000 },
  { id: 11, name: "Ivy Violet", position: "Marketing Specialist", department: "Marketing", salary: 55000 },
  { id: 12, name: "Jack Orange", position: "Graphic Designer", department: "Design", salary: 63000 },
  { id: 13, name: "Kathy Purple", position: "HR Manager", department: "Human Resources", salary: 70000 },
];


// Function to group employees by position
const groupByPosition = (employees) => {
  return employees.reduce((acc, employee) => {
    console.log('employees',employees);

    if (!acc[employee.position]) {
      acc[employee.position] = [];
    }
    console.log('employees99',employees);
    acc[employee.position].push(employee);
    console.log('acc',acc);
    return acc;
  }, {});
};

// Component for rendering the list
const EmployeeList = () => {

  const groupedEmployees = groupByPosition(employees);
  console.log('groupedEmployees',groupedEmployees);
  const positions = Object.keys(groupedEmployees);
  console.log('positions',positions);

  return (
    <ScrollView>
      {positions.map((position) => (
        <TouchableOpacity  key={position} style={styles.positionContainer}>
          <Text style={styles.positionTitle}>{position}</Text>
           { position =='Project Manager' && groupedEmployees[position].map((employee) => {
             return(
               <>
               {
                 
                  <View key={employee.id} style={styles.employeeContainer}>
                   <Text style={styles.employeeName}>{employee.name}</Text>
                   <Text style={styles.employeeDetails}>{employee.department} - ${employee.salary}</Text>
                 </View> 
                
               }
               </>
             )})}
           
        </TouchableOpacity>
      ))}
    </ScrollView>
    // <FlatList
    //   data={positions}
    //   keyExtractor={(item) => item}
    //   renderItem={({ item: position }) => (
    //     <View style={styles.positionContainer}>
    //       <Text style={styles.positionTitle}>{position}</Text>
    //       <FlatList
    //         data={groupedEmployees[position]}
    //         keyExtractor={(employee) => employee.id.toString()}
    //         renderItem={({ item }) => (
    //           <View style={styles.employeeContainer}>
    //             <Text style={styles.employeeName}>{item.name}</Text>
    //             <Text style={styles.employeeDetails}>{item.department} - ${item.salary}</Text>
    //           </View>
    //         )}
    //       />
    //     </View>
    //   )}
    // />
  );
};

const styles = StyleSheet.create({
  positionContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  positionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  employeeContainer: {
    marginLeft: 15,
    marginBottom: 5
  },
  employeeName: {
    fontSize: 16
  },
  employeeDetails: {
    color: 'gray'
  }
});

export default EmployeeList;
