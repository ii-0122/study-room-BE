import { Types } from 'mongoose';
import { StartEndTime } from '../planners.schema';

export class PlannerDto {
  subject: string | undefined;

  todo: string;

  date: string;

  startTime: string | undefined;

  endTime: string | undefined;

  repeatDays: string[] | undefined;

  repeatWeeks: number | undefined;

  parentObjectId?: Types.ObjectId | undefined;

  isComplete: boolean;

  timelineList: StartEndTime[] | undefined;
}