import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


const initialEmployees = [
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
  

// Component for rendering the list
const EmplList3 = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  
//   console.log('employees',employees);
  const toggleActiveStatus = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, isActive: !employee.isActive } : employee
      )
    );
  };

    const positions = [...new Set(employees.map(emp => emp.position))];
  console.log('99',employees);


  return (
    <FlatList
      data={positions}
      keyExtractor={(item) => item}
      renderItem={({ item: position }) => (
        <View style={styles.positionContainer}>
          <Text style={styles.positionTitle}>{position}</Text>
          {employees.filter(employee => employee.position === position).map((employee) => (
            <TouchableOpacity
              key={employee.id}
              onPress={() => toggleActiveStatus(employee.id)}
            >
              <View style={[styles.employeeContainer, employee.isActive && styles.active]}>
                <Text style={styles.employeeName}>{employee.name}</Text>
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
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  active: {
    backgroundColor: '#d0f0c0'
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
