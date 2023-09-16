import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const FormModal = () => {
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_USER_ID;
  
  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    console.log(e);
    // emailjs.sendForm(service_id, template_id, e.target, user_id)
    //   .then((result) => {
    //     console.log(result.text);
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Message Sent Successfully'
    //     })
    //   }, (error:any) => {
    //     console.log(error.text);
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Ooops, something went wrong',
    //       text: error.text,
    //     })
    //   });
    // e.target.reset()
  };
  return (
    <Form onSubmit={handleOnSubmit} className="border-2 rounded-lg p-10">
      <Form.Field
        id="form-input-control-email"
        control={Input}
        label="Email"
        name="user_email"
        placeholder="Email…"
        required
        icon="mail"
        iconPosition="left"
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Name"
        name="user_name"
        placeholder="Name…"
        required
        icon="user circle"
        iconPosition="left"
      />
      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Message"
        name="user_message"
        placeholder="Message…"
        required
      />
      <Button type="submit" color="green">
        Submit
      </Button>
    </Form>
  );
};
