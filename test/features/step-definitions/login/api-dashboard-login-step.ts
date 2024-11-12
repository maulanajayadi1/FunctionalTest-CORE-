import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any

When('api user login', async function () {
    
    requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVhYWZmNDdjMjFkMDZlMjY2Y2NlMzk1YjIxNDVjN2M2ZDQ3MzBlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjAyNDU1NDQxMzk4Njk3MTk5NiIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6Im1hcmlhbnN5YWgucml3ZW5kaUBudXNhbnRhcmEudGVjaG5vbG9neSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3Mjc0MTAwOTEsIm5hbWUiOiJNdWhhbW1hZCBBcmlhbnN5YWggUml3ZW5kaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKNjd0OThNU2VNUl9QaHM0RFpKSG0wT05SMUVxcXk4MmlFR1NFS01vNko0bmVFOFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTXVoYW1tYWQgQXJpYW5zeWFoIiwiZmFtaWx5X25hbWUiOiJSaXdlbmRpIiwiaWF0IjoxNzI3NDEwMzkxLCJleHAiOjE3Mjc0MTM5OTEsImp0aSI6IjY5MDM0MzU4NjZkMWM5ZDBjOTZlMzU2YWM5YWQwNjM2MDBkMmZmOTgifQ.Js499xCm3e4-fa1nQVnqZh_X2N_Cj4c2k3CN7-YKYa2QVrKGtAN9m-kYXM7E_PfsYzDIyzdVGRyW3HxTWt_ZvwCaEoi6xj5Eo_w0SfkQgQvDdqBzoldSceSPio2ev6FZC7ihKKV4f1AjLA2Asf5cNMbpQqKt_bYiBcekQz69x-lNNma7Xqmbu70VunAeMZpFGdHh-UuO6YXMupboA8ZLiCAH8-FmavgqjXcAkYgAPs8LHkU6eIzSRsTW2bve6nGLinsuXLvAFUfqbE0-WobthNsTR1dWwSflfQ8MHNKuxDzHOYMBeXKjQO282IqTz9iIfNuur4tlc6x_1uad7kokBA"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)
    expect(response.data).to.have.property('access_token')

    token = response.data.access_token
    console.log('Token:', token)

    this.token = token
})


