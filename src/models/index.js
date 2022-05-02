const { Account } = require('./account');
const { CreditCard } = require('./creditCard');
const { InvoiceFinancings } = require('./invoiceFinancings');
const { Overdraft } = require('./opcredoverdraft');
const { Customer } = require('./customer');
const { Financing } = require('./financing');

module.exports = {
  Account,
  CreditCard,
  InvoiceFinancings,
  Overdraft,
  Customer,
  Financing
};
