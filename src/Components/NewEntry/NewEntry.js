import React from "react";

export class NewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            content: ''
        }
        this.submitEntry = this.submitEntry.bind(this)
    }

    submitEntry() {
        const today = new Date();
        const todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = todaysDate+' '+time;

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        console.log(title, dateTime, content);

        this.setState=({
            title: title,
            content: content,
            date: dateTime
        })

        console.log(this.state.dateTime)
    }

    render() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;

        return (
            <div className="bg-fuchsia-100">
                <p>New Entry</p>
                <input placeholder="title" id="title"></input>
                <p id="dateTime">{ dateTime }</p>
                <textarea placeholder="Start typing..." id="content" rows="10" cols="60"></textarea>
                <button className="px-5 py-2 bg-white" onClick={ this.submitEntry }>Submit</button>
            </div>
        )
    }
}