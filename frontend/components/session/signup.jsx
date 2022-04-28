// import React from "react";

// class Signup extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             phone: '',
//             fname: '',
//             lname: '',
//             email: '',
//             username: '',
//             password: '',
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInput(type) {
//         return (e) => {
//             this.setState({ [type]: e.target.value })
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.createNewUser(this.state)
//             .then( () => this.props.history.push('/chirps'));
//     }

//     render() {
//         return (
//             <div className='auth-form'>
//                 <form className="session_form" onSubmit={this.handleSubmit}>
//                     <input
//                         type="tel"
//                         placeholder="Phone number"
//                         maxlength="12"
//                         value={this.state.phone}
//                         onChange={this.handleInput('phone')}
//                     />
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="First name"
//                         value={this.state.fname}
//                         onChange={this.handleInput('fname')}
//                     />
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="Last name"
//                         value={this.state.lname}
//                         onChange={this.handleInput('lname')}
//                     />
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         value={this.state.email}
//                         onChange={this.handleInput('email')}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         value={this.state.email}
//                         onChange={this.handleInput('phone')}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Review display name"/>
//                     <small>This is a name that will be shown whenever you leave a review. Remember to not use your full name or email.</small>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={this.handleInput('password')}
//                     />
//                     <button type="submit">Continue</button>
//                 </form>
//             </div>
//         )
//     }
// }
