import React from 'react';

import './Contact.scss';

import DateHelper from '../helpers/DateHelper.js';

class Contact extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt="" />
        </span>
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">{DateHelper.formatDateBR(data.admissionDate)}</span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
      </article>
    );
  }
}

export default Contact;