import React from 'react';
import './myForm.scss';
import { ConversationalForm } from 'conversational-form';
import { withRouter } from "react-router-dom";



class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.formFields = [
            {
                'tag': 'input',
                'type': 'text',
                'name': 'nombre',
                'cf-questions': 'What is your firstname?'
            },
            {
                'tag': 'input',
                'type': 'text',
                'name': 'apellido',
                'cf-questions': 'What is your lastname?'
            }
        ];

        this.submitCallback = this.submitCallback.bind(this);
    }

    componentDidMount() {
        this.cf = ConversationalForm.startTheConversation({
            options: {
                submitCallback: this.submitCallback,
                loadExternalStyleSheet: false,
                preventAutoFocus: true,
            },
            tags: this.formFields
        });
        this.elem.appendChild(this.cf.el);
    }

    submitCallback() {
        var Data = this.cf.getFormData(true);
        console.log(Data);
        this.cf.addRobotChatResponse(`Redireccion en 3 segundos ${Data.nombre}`);
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