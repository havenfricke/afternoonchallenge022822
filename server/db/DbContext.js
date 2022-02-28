import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Burgers = [{ id: 1, name: 'whopper', size: 'smol' }]
}

export const dbContext = new DbContext()
