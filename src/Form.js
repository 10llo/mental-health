import React from 'react';
import './form.css';
import { ConversationalForm } from 'conversational-form';
import { withRouter } from "react-router-dom";



class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.formFields = [
            {
                'tag': 'input',
                'type': 'text',
                'name': 'firstname',
                'cf-questions': 'What is your firstname?'
            },
            {
                'tag': 'input',
                'type': 'text',
                'name': 'lastname',
                'cf-questions': 'What is your lastname?'
            }
        ];

        this.submitCallback = this.submitCallback.bind(this);
    }

    componentDidMount() {
        this.cf = ConversationalForm.startTheConversation({
            options: {
                submitCallback: this.submitCallback,
                preventAutoFocus: true,
                // loadExternalStyleSheet: false
            },
            tags: this.formFields
        });
        this.elem.appendChild(this.cf.el);
    }

    submitCallback() {
        var Data = this.cf.getFormData(true);
        console.log("Data, obj:", Data);
        this.cf.addRobotChatResponse(`Redireccion en 3 segundos ${Data.toString()}`);
        window.setTimeout(() => {
            this.props.history.push("/");
        }, 3000)

    }
    render() {
        return(
            <div >
                <div className="chat"
                    ref={ref => this.elem = ref}
                />
            </div>
        );
    }
}

export default withRouter(MyForm);