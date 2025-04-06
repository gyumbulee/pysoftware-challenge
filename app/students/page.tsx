import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Example student data
const students = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
  { id: 3, firstName: 'Tom', lastName: 'Brown', email: 'tom@example.com' },
  { id: 4, firstName: 'Alice', lastName: 'Green', email: 'alice@example.com' },
  { id: 5, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com' },
  { id: 6, firstName: 'Charlie', lastName: 'White', email: 'charlie@example.com' },
  { id: 7, firstName: 'Dave', lastName: 'Martinez', email: 'dave@example.com' },
  { id: 8, firstName: 'Eva', lastName: 'Garcia', email: 'eva@example.com' },
  { id: 9, firstName: 'Frank', lastName: 'Wilson', email: 'frank@example.com' },
  { id: 10, firstName: 'Grace', lastName: 'Lopez', email: 'grace@example.com' },
];

const StudentsPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl mb-4">Students List</h1>

      {/* If there are no students, display this message */}
      {students.length === 0 ? (
        <p>No students available yet.</p>
      ) : (
        <div className="space-y-4">
          {/* Map through students and display their info */}
          {students.map((student) => (
            <div key={student.id} className="border p-4 rounded-md">
              <h2 className="text-xl">
                {student.firstName} {student.lastName}
              </h2>
              <p>Email: {student.email}</p>
            </div>
          ))}
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default StudentsPage;
