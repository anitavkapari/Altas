// MyComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEmployeeStatus } from '../../saga/actionTypes';

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
      position: "Software Engineer",
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
  
  
  ];

const ReduxExample = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState(initialEmployees);
  const selectedEmployees = useSelector(state => state.selectedEmployees);

  const handleToggleStatus = (id) => {
    dispatch(toggleEmployeeStatus(id));
  };

  console.log('selectedEmployees',selectedEmployees);
  return (
    <View>
      <View style={{height:50}}>
      <Text
           onPress={() => {
             navigation.navigate('Profile',{
                 employee:selectedEmployee
               })
           }}
         >{'Header'}</Text>
      </View>
       <FlatList
       data={employees}
       keyExtractor={(item) => item}
       renderItem={({ employee }) => (
         <View style={styles.positionContainer}>
             <TouchableOpacity
               // key={employee.id}
               onPress={() => {
                handleToggleStatus(employee.id)
               }}
             >
               <View style={[styles.userCard, employee.isActive && styles.active]}>
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
   userCard: {
     width: '90%',
     height: normalize(120),
     backgroundColor: Colors.white,
     alignSelf: 'center',
     marginVertical: normalize(5),
     padding: normalize(10),
     borderRadius: normalize(10),
     elevation: 1,
     shadowColor: Colors.black,
     shadowOpacity: 0
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

export default ReduxExample;
