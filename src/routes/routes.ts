import { Router } from 'express';

import { getTutors, createTutor, updateTutor, deleteTutor, createPet, updatePet, deletePet } from '../controllers/controllers';

const router = Router();

router.get('/tutors', getTutors);

router.post('/tutor', createTutor)

router.put('/tutor/:id', updateTutor);

router.delete('/tutor/:id', deleteTutor);

router.post('/pet/:tutorId', createPet);

router.put('/pet/:petId/tutor/:tutorId', updatePet);

router.delete('/pet/:petId/tutor/:tutorId', deletePet);

export default router;