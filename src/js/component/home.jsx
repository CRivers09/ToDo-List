import React from 'react';
//import PropTypes from 'prop-types';

//create your first component
export class Todo extends React.Component{
    
    constructor() {
        super();
        this.state = {
            input: "",
            notes: []  
        };
    }
    
    holdInput(input) {
        let notepad = this.state;
        notepad.input = input;
        this.setState(notepad);
    }
    
    placeNote(note) {
        let notepad = this.state;
        notepad.notes.push(note);
        notepad.input = "";
        this.setState(notepad);
    }
    
    deleteNote(i) {
        let notepad = this.state;
        notepad.notes = notepad.notes.filter((value, index) => {
            return index != i;
        });
        this.setState(notepad);
    }
    
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6 mt-3" style={{ backgroundColor: "yellow"}}>
                        <div className="row">
                            <div className="col-2 pt-2 margin"></div>
                            <div className="col-10 pt-2 text-center">
                                <h4>To-Do List</h4>
                            </div>
                            {
                                this.state.notes.map((str, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="col-2 margin line"></div>
                                            <div className="col-10 line note">
                                                <li>
                                                    {str}
                                                    <span id={index}
                                                          onClick={(e) => this.deleteNote(e.currentTarget.id)}>
                                                        <i className="fa fa-trash"></i>
                                                    </span>
                                                </li>
                                            </div>
                                        </React.Fragment>
                                    );
                                })
                            }
                            <div className="col-2 margin line"></div>
                            <div className="col-10 line note">
                                <li>
                                    <input onChange={(e) => {this.holdInput(e.target.value);}}
                                           onKeyPress={(e)=> {if(e.key === "Enter") this.placeNote(e.target.value);}}
                                           type="text" placeholder="Enter a note..." value={this.state.input}/>
                                </li>
                            </div>
                            <div className="col-2 py-2 margin line"></div>
                            <div className="col-10 pt-1 pb-2 line">
                                {this.state.notes.length} notes left
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
