import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const employees = [
    {
      id: 1,
      name: "John Doe",
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
      position: "Project Manager",
      department: "Management",
      salary: 85000,
      projects: [
        { projectId: 103, projectName: "Project Gamma" }
      ]
    },
    {
      id: 3,
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
      position: "Backend Developer",
      department: "Development",
      salary: 75000,
      projects: [
        { projectId: 106, projectName: "Project Zeta" }
      ]
    },
   
  ];

  
const groupByPosition = (employees) => {
  return employees.reduce((acc, employee) => {
    if (!acc[employee.position]) {
      acc[employee.position] = [];
    }
    acc[employee.position].push(employee);
    return acc;
  }, {});
};

// Component for rendering the list
const EmployeeList2 = () => {
  const groupedEmployees = groupByPosition(employees);
  const positions = Object.keys(groupedEmployees);
  console.log('positions',positions[0]);

  return (
    <FlatList
      data={employees}
      keyExtractor={(item) => item}
      renderItem={({ item,index }) => {
        console.log('objectitem',item.projects);
        return (
          <View style={styles.positionContainer}>
          <Text style={styles.positionTitle}>{item.position}</Text>
          <Text style={styles.employeeDetails}>
                {item.department} - ${item.salary}
              </Text>
              <View style={styles.projectList}>
                <Text style={styles.projectTitle}>Projects:</Text>
               
          {item.projects.map((employee) => (
            <View key={employee.id} style={styles.employeeContainer}>
              <Text style={styles.employeeName}>{employee.projectName}</Text>
              {/* <Text style={styles.employeeDetails}>
                {employee.department} - ${employee.salary}
              </Text>
              <View style={styles.projectList}>
                <Text style={styles.projectTitle}>Projects:</Text>
                {employee.projects.map((project) => (
                  <Text key={project.projectId} style={styles.projectName}>
                    - {project.projectName}
                  </Text>
                ))}*/}
              </View> 
           
          ))}
           </View>
        </View>
    
        )
      }
       
  }
    />
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
    marginBottom: 15
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

export default EmployeeList2;
