import Button, Label, Col, FormGroup from 'reactstrap';
import Formik, Field, Form from 'Formik';

//Formik: Exercise 3 but make sure to check 1 & 2: make sure to check this file is properly finished before continuing!
function ContactForm (props) {


<Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
        ></Formik>

export default ContactForm
