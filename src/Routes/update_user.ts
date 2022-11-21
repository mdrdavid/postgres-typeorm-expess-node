import express from 'express';
import { User } from '../Entities/User';

const router =express.Router()

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  const response = await User.update(parseInt(userId))
  return response.json(response)
});

 
