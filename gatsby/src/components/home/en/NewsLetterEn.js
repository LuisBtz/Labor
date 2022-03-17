import React from 'react'
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"
import Parser from 'html-react-parser';


// markup
class NewsletterEn extends React.Component {

  constructor() {
    super()
    this.state = {
      message: "Subscribe to our Newsletter",
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

<p className="detail">{Parser(this.state.message)}</p>


        <form className="subscribe" onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            name="EMAIL"
            id="mce-EMAIL"
            className="subscribe-email"
            placeholder="Type your email"
            required
          />
          <button className="btn_sent" type="submit">
            Subscribe
          </button>
        </form>

      </NewsletterWrapper>

    )
  }
}

const NewsletterWrapper = styled.div`
  width: 100%;
  background-color: #F1F2F2;
  padding: 2rem 1rem;

  .subscribe {
    display: flex;
    justify-content: space-between;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
  }

  input {
    flex: 1;
    margin-right: 2rem;
    @media screen and (max-width: 768px) {
        margin-top: 1rem;
      }
  }

  input, button {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    font-size: var(--headline-4);
    font-family: var(--bold);
    text-transform: uppercase;
  }

  input:focus, button:focus {
    outline: 0;
  }

  button {
    text-align: center;
      @media screen and (max-width: 768px) {
        text-align: left;
      }
  }

  button:focus {
    background: black;
    color: white;
  }
  

`




export default NewsletterEn