import { Schema } from "mongoose";

export const PlanetSchema = new Schema({

  name: { type: String, required: true },
  biome: { type: String, required: true },
  atmosphere: { type: Boolean },
  galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxies' }
}, { timestamps: true, toJSON: { virtuals: true } })
