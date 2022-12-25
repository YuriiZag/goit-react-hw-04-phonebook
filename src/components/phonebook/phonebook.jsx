import PropTypes from 'prop-types';
import { useState } from 'react';
import { Header, PhonebookForm, TypingField, Label, SubmitButton, Container } from './phonebook.styled';


export const Phonebook = ({formSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeHandler = e => {
    switch (e.currentTarget.name) {
      case 'name': setName(e.currentTarget.value)
        break;
      case 'number': setNumber(e.currentTarget.value)
        break;
      default:
        return;
    }
    };

    const onSubmitHandler = evt => {
      evt.preventDefault();
      formSubmit({name, number})
    };

  return (
    <Container>
      <Header>Phonebook</Header>
      <PhonebookForm autoComplete="off" onSubmit={onSubmitHandler}>
        <Label htmlFor="name">
          Name
          <TypingField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={onChangeHandler}
            value={name}
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <TypingField
            name="number"
            type="tel"
            onChange={onChangeHandler}
            value={number}
            required
          ></TypingField>
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </PhonebookForm>
    </Container>
  );
}


// export class Phonebook extends React.Component {
//   state = {
//     name: '',
//     number: ''
//   }
    


// onChangeHandler = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   onSubmitHandler = evt => {
//     evt.preventDefault();
//     this.props.formSubmit(this.state)
//   };

//   render() {
//     return (
//       <Container>
//         <Header>Phonebook</Header>
//         <PhonebookForm autoComplete="off" onSubmit={this.onSubmitHandler}>
//           <Label htmlFor="Name">
//             Name
//             <TypingField
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               onChange={this.onChangeHandler}
//               value={this.state.name}
//               required
//             />
//           </Label>
//           <Label htmlFor="phoneNumber">
//             Number
//             <TypingField
//               name="number"
//               type="tel"
//               onChange={this.onChangeHandler}
//               value={this.state.number}
//               required
//             ></TypingField>
//           </Label>
//           <SubmitButton type="submit">Add contact</SubmitButton>
//         </PhonebookForm>
//       </Container>
//     );
//   }
// }

Phonebook.propType = {
  formSubmit: PropTypes.func.isRequired,
};