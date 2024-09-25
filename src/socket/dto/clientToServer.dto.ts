import { Types } from 'mongoose';
import { StartEndTime } from 'src/planners/planners.schema';

export type StartStopState = 'start' | 'stop';

export class ResponseUserInfoDTO {
  timer: number;
  state: StartStopState;
  socketId: string;
}

export class StatisticDto {
  date: string;
  total: number;
  max: number;
  rest: number;
  morning: number;
  afternoon: number;
  evening: number;
  night: number;
}

export class PlannerDto {
  _id: Types.ObjectId;
  todo: string;
  isComplete: boolean;
  date: string;
  timeLineList: StartEndTime[];
}

export class LeaveRoomDto {
  statistic: StatisticDto;
  planner: PlannerDto[];
  isChat: boolean;
}

export class SendChatDto {
  message: string;
}

export class StartTimerDto {
  timer: number;
  state: StartStopState;
  rest: number;
}

export class StopTimerDto {
  timer: number;
  state: StartStopState;
  total: number;
  max: number;
  planner: PlannerDto[];
}

export class UpdateDto {
  statistic: StatisticDto;
  planner: PlannerDto[];
}