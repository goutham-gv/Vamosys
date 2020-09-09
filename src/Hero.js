import React, { Component } from 'react';
import App from './App';
import './st.css';


import firebaseApp from './config.js';


class  Hero  extends Component{
    state={
        students:[
            {
                first:'goutham',
                last:'nivass',
                age:'22',
            },
            {
                first:'hari',
                last:'arun',
                age:'21',
            },
            {
                first:'sarath',
                last:'arjun',
                age:'20',
            },
            {
                first:'madhan',
                last:'arjun',
                age:'7',
            },
            {
                first:'dhoni',
                last:'hbp',
                age:'30',
            },
            {
                first:'virat',
                last:'kholi',
                age:'22',
            },
            {
                first:'hardik',
                last:'pandya',
                age:'15',
            },
        ],
        pageNo:0
    }

    signOut = (e) => {
        e.preventDefault()
        firebaseApp.auth().signOut().then( s => {
            this.props.history.push('/')
        })
      }
    addStudent = (e)=>{
        e.preventDefault()
        this.setState({
            students: [
                {
                    first:this.firstname.value,
                    last:this.lastname.value,
                    age:this.age.value,
                },
                ...this.state.students,
            ],
            pageNo:0
        })

        this.firstname.value=''
        this.lastname.value=''
        this.age.value=''
    }

    prevPage = e => {
        this.setState({
            pageNo: this.state.pageNo-1
        })
    }
    nextPage = e => {
        this.setState({
            pageNo: this.state.pageNo+1
        })
    }
   render(){
    const currPageStudents=this.state.students.slice(
        this.state.pageNo*3,
        (this.state.pageNo+1)*6
    )

    let studentlist = currPageStudents.map((stu,i)=> 
        <tr key={i}>
            <td>{stu.first}</td>
            <td>{stu.last}</td>
            <td>{stu.age}</td>
        </tr>
        )
        

    return(
 
      <div className="hero">
          
          <nav>
              <h2>Welcome</h2>
              <button onClick={this.signOut}>Signout</button>
          </nav>
          
        
        <form>
            <div className="divded">
            <label for="fname">First Name</label>
            <input class="bod" placeholder="your name.." style={{color:'black'}} ref={ref=>this.firstname=ref} type='text' />
            <label for="fname">Last Name</label>
            <input class="bod" placeholder="your lastname.."style={{color:'black'}} ref={ref=>this.lastname=ref} type='text' />
            <label for="fname">Age</label>
            <input class="bod" placeholder="your age.."style={{color:'black'}} ref={ref=>this.age=ref} type='text' />
            <div className="gou">
            <button onClick={this.addStudent}>submit</button>
            </div>
            </div>
        </form>
  


        <table class="center">
              <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {studentlist}
              </tbody>
        </table>    

        <div className="all">
            <button onClick={this.prevPage}>pre</button>
                     {this.state.pageNo+1}
            <button onClick={this.nextPage}>next</button>
        </div>
      </div>
      
      
    );
   }
}


export default Hero;