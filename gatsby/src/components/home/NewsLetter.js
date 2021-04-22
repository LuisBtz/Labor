import React from 'react'
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"


// markup
class Newsletter extends React.Component {

  constructor() {
    super()
    this.state = {
      message: "suscríbete a nuestro newsletter",
      name: "",
      email: "",
      result: null,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {

        this.setState({ message: data.msg })
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    this.setState({ email: "", name: "" })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {

  return (
    <NewsletterWrapper>

        <p>{this.state.message}</p>

        
        <form className="subscribe" onSubmit={this.handleSubmit}> 
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            name="EMAIL"
            id="mce-EMAIL"
            className="subscribe-email"
            placeholder="Mail"
            required
          />
          <button className="btn_sent" type="submit">
            Suscribirse
          </button>
        </form>

    </NewsletterWrapper>

  )
} 
}

const NewsletterWrapper = styled.div`
  width: 100%;
  background-color: #F1F2F2;

`




export default Newsletter