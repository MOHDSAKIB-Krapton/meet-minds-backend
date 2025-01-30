import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({ timestamps: true })
export class Event {
  //   _id: Types.ObjectId; // Explicitly declaring _id for type safety

  @Prop({ type: Types.ObjectId, required: true, ref: 'Profile' })
  host_id: Types.ObjectId;

  @Prop({ required: true })
  event_type: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: Date })
  start_date: Date;

  @Prop({ required: true, type: Date })
  end_date: Date;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  cover_picture: string;

  @Prop({ required: true })
  ticket: string;

  @Prop({ required: true, type: Number })
  no_of_attendees: number;

  @Prop({ required: true, type: Boolean })
  is_public: boolean;
}

export const EventSchema = SchemaFactory.createForClass(Event);
