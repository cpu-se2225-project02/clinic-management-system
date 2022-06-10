/* eslint-disable no-undef */
import { MedicalNotes, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import {
  createMedNote, getAMedNote,
} from '../medNotes';

let mockCtx: MockContext;
let ctx: Context;
const NoteA: MedicalNotes = {
  id: 1,
  date_noted: '2012-12-22',
  med_notes: 'This man needs some milk',
  title: 'Tale of Milk',
  patient_id: 1,
  doc_id: 1,

};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding of a medical note', async () => {
  mockCtx.db.medicalNotes.create.mockResolvedValue(NoteA);

  await expect(createMedNote(NoteA, ctx)).resolves.toEqual({
    id: 1,
    date_noted: '2012-12-22',
    med_notes: 'This man needs some milk',
    title: 'Tale of Milk',
    patient_id: 1,
    doc_id: 1,
  });
});

it('should test getting a specific medical note', async () => {
  mockCtx.db.medicalNotes.findUnique.mockResolvedValue(NoteA);

  const patientId: Prisma.MedicalNotesWhereUniqueInput = {
    id: 1,
  };

  await expect(getAMedNote(patientId, ctx)).resolves.toEqual({
    id: 1,
    date_noted: '2012-12-22',
    med_notes: 'This man needs some milk',
    title: 'Tale of Milk',
    patient_id: 1,
    doc_id: 1,

  });
});
