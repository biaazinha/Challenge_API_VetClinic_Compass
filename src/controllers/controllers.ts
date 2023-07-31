import { RequestHandler } from 'express';
import { Tutor, Pet } from '../models/models';

const tutors: Tutor[] = [];

// GET - Retrieves all tutors
export const getTutors: RequestHandler = (req, res) => {
    res.status(200).json(tutors);
};


// POST - Create a new tutor
let tutorIdCounter = 1;
export const createTutor: RequestHandler = (req, res) => {
    const { name, phone, email, date_of_birth, zip_code } = req.body;
    const newTutor = new Tutor(
      tutorIdCounter,
      name,
      phone,
      email,
      date_of_birth,
      zip_code
    );
  
    if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide name value' });
    } else if (!phone) {
        res.status(400).json({ success: false, msg: 'Please provide phone value' });
    } else if (!email) {
        res.status(400).json({ success: false, msg: 'Please provide email value' });
    } else if (!date_of_birth) {
      res.status(400).json({ success: false, msg: 'Please provide date of birthday value' });
    } else if (!zip_code) {
      res.status(400).json({ success: false, msg: 'Please provide zip code value' });
    }

    tutorIdCounter++;
    tutors.push(newTutor);
    res.status(201).json({ success: true, message: 'Created the tutor.', tutor: newTutor });
};


// PUT - > Updates a tutor
export const updateTutor: RequestHandler<{ id: string }> = (req, res) => {
  const tutorId = Number(req.params.id);
  const updatedTutor = req.body;
  const index = tutors.findIndex(tutor => tutor.id === tutorId);

  if (index < 0) {
    return res.status(404).json({ success: false, msg: 'Tutor not found' });
  }

  tutors[index] = { ...tutors[index], ...updatedTutor };
  res.json({ success: true, message: 'Tutor updated', tutor: tutors[index] });
};


// DELETE - Deletes a tutor
export const deleteTutor: RequestHandler<{ id: string }> = (req, res) => {
  const tutorId = Number(req.params.id);
  const tutorIndex = tutors.findIndex(tutor => tutor.id === tutorId);

  if (tutorIndex < 0) {
    return res.status(404).json({ success: false, msg: 'Tutor not found' });
  }

  tutors.splice(tutorIndex, 1);
  tutors.push()

  res.status(201).json({ success: true, message: 'Tutor deleted' });
};


// POST - Creates a pet and adds it to a tutor
let petIdCounter = 1;
export const createPet: RequestHandler<{ tutorId: number }> = (req, res) => {
    const tutorId = Number(req.params.tutorId);
    const { name, species, carry, weight, date_of_birth } = req.body;
    const tutor = tutors.find(tutor => tutor.id === tutorId);
  
    if (!tutor) {
      return res.status(404).json({ success: false, msg: 'Tutor not found' });
    } else if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide name value' });
    } else if (!species) {
        res.status(400).json({ success: false, msg: 'Please provide species value' });
    } else if (!carry) {
        res.status(400).json({ success: false, msg: 'Please provide carry value' });
    } else if (!weight) {
      res.status(400).json({ success: false, msg: 'Please provide date of weight value' });
    } else if (!date_of_birth) {
      res.status(400).json({ success: false, msg: 'Please provide date of birthday code value' });
    }
  
    const newPet = new Pet(
      petIdCounter,
      name,
      species,
      carry,
      weight,
      date_of_birth
    );
  
    petIdCounter++;
    tutor.pets.push(newPet);
    res.status(201).json({ success: true, message: 'Pet created and added to the tutor.', pet: newPet });
};


// PUT - > Updates a pet's info
export const updatePet: RequestHandler<{ tutorId: string; petId: string }> = (req, res) => {
  const tutorId = Number(req.params.tutorId);
  const petId = Number(req.params.petId);
  const updatedPet = req.body;
  const tutor = tutors.find(tutor => tutor.id === tutorId);

  if (tutor) {
    const petIndex = tutor.pets.findIndex(pet => pet.id === petId);
    if (petIndex !== -1) {
      tutor.pets[petIndex] = { ...tutor.pets[petIndex], ...updatedPet };
    }
  }

  res.json({ success: true, message: 'Pet info updated.', updatedPet });
};


// DELETE - Deletes a pet from a tutor
export const deletePet: RequestHandler<{ petId: number; tutorId: number }> = (req, res) => {
    const petId = Number(req.params.petId);
    const tutorId = Number(req.params.tutorId);
    const tutor = tutors.find(tutor => tutor.id === tutorId);
  
    if (!tutor) {
      return res.status(404).json({ success: false, msg: 'Tutor not found' });
    }
  
    const petIndex = tutor.pets.findIndex(pet => pet.id === petId);
  
    if (petIndex === -1) {
      return res.status(404).json({ success: false, msg: 'Pet not found' });
    }
  
    tutor.pets.splice(petIndex, 1);
  
    res.json({ success: true, message: 'Pet deleted from the tutor.' });
};
