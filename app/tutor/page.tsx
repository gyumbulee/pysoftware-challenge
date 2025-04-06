import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Example tutor data
const tutors = [
  { id: 1, firstName: 'Emily', lastName: 'Clark', email: 'emily@example.com' },
  { id: 2, firstName: 'Michael', lastName: 'Adams', email: 'michael@example.com' },
  { id: 3, firstName: 'Sophia', lastName: 'Brown', email: 'sophia@example.com' },
  { id: 4, firstName: 'James', lastName: 'Wilson', email: 'james@example.com' },
  { id: 5, firstName: 'Olivia', lastName: 'Davis', email: 'olivia@example.com' },
  { id: 6, firstName: 'David', lastName: 'Martinez', email: 'david@example.com' },
  { id: 7, firstName: 'Isabella', lastName: 'Garcia', email: 'isabella@example.com' },
  { id: 8, firstName: 'Lucas', lastName: 'Rodriguez', email: 'lucas@example.com' },
  { id: 9, firstName: 'Charlotte', lastName: 'Hernandez', email: 'charlotte@example.com' },
  { id: 10, firstName: 'Benjamin', lastName: 'Lopez', email: 'benjamin@example.com' },
];

const TutorPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl mb-4">Tutors</h1>

      {/* If no tutors, display a message */}
      {tutors.length === 0 ? (
        <p>No tutors available yet.</p>
      ) : (
        <div className="space-y-4">
          {/* Loop through and display tutors */}
          {tutors.map((tutor) => (
            <div key={tutor.id} className="border p-4 rounded-md">
              <h2 className="text-xl">
                {tutor.firstName} {tutor.lastName}
              </h2>
              <p>Email: {tutor.email}</p>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TutorPage;
