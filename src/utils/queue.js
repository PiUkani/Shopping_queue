export class booking {

    constructor(id, store, date, est, num_of_shoppers){
        this.id = id;
        this.store = store;
        this.date = date;
        this.est = est;
        this.num_of_shoppers = num_of_shoppers;
        this.position = Math.floor(1 + Math.random() * 49);
    }

}

export let bookings = [new booking(2, "Yes Frills", "Friday, June 26th @ 7pm", 30, 1),
                         new booking(0, "Floor Mart", "Monday, June 29th @ 10am", 50, 2),
                         new booking(1, "Shoppers Not Drug Mart", "Thursday, July 3rd @ 10am", 10, 1)];

export const getBookings = () =>{
    return bookings;
}

export const addBooking = b => {
  bookings.push(b);
};
/*
// Function to add a booking
export const addStudent = queue => {
  // log("adding student");
  const studentList = queue.state.students;

  const student = {
    name: queue.state.studentName,
    course: queue.state.studentCourse
  };

  // Adding at a particular position
  const position = parseInt(queue.state.position);

  if (position > studentList.length || !position) {
    // log("here");
    studentList.push(student);
  } else {
    // log("here2");
    studentList.splice(position - 1, 0, student);
  }

  queue.setState({
    students: studentList
  });
};
*/
export const removeBooking = (queue, b) => {
  //log(student)

  // filters out the student we don't want.
  const filteredBookings = bookings.filter(s => {
    return s !== b;
  });

  //log(filteredStudents)

  bookings = filteredBookings;

  queue.setState({
    bookings: filteredBookings
  });
};


export class Queue {
  constructor(
    username,
    date,
    shopTime,
    numCustomer,
    dateTimeQueued,
  ) {
    this.username = username;
    this.date = date;
    this.shopTime = shopTime;
    this.numCustomer = numCustomer;
    this.dateTimeQueued = dateTimeQueued;
  }

  getTimeQueued = () => {
    
  }
}
