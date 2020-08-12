// // A function to send a POST request to add a new queue
// export const addQueue = (queueData, app) => {
//     const request = new Request('/api/queue', {
//         method: 'post',
//         body: queueData,
//         headers: {
//             Accept: 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         }
//     });

//     // Send the request with fetch()
//     fetch(request)
//         .then(res => {
//             return res.json();
//         })
//         .then(json => {
//             if (json.message !== undefined) {
//                 queueData.setState({
//                     displayError: true,
//                     errorMessage: json.message
//                 });
//             } else {
//                 app.setState({
//                     displayError: true,
//                     errorMessage: "your new booking is added"
//                 });
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };




// A function to send a GET request to logout the current user
export const returnQueue = (app) => {
    const url = '/api/logout';

    fetch(url)
        .then(() => {
            app.setState({
                currentUser: null,
                userType: null,
                isLoggedIn: false,
            });
        })
        .catch(error => {
            console.log(error);
        });
};


export const addQueue = (queueData) => {
    const request = new Request('/api/queue', {
        method: 'post',
        body: queueData,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            return res;
        })
        // .then(json => {
        //     if (json.message !== undefined) {
        //         queueData.setState({
        //             displayError: true,
        //             errorMessage: json.message
        //         });
        //     } else {
        //         // app.setState({
        //         //     displayError: true,
        //         //     errorMessage: "your new booking is added"
        //         // });
        //         return 'success'
        //     }
        // })
        .catch(error => {
            console.log(error);
        });
};

