import { IllegalArgumentException } from "../../../errors/IllegalArgumentException";

export class Task {
  private static POSTPONE_MAX_COUNT = 3;

  private id: number;
  private taskStatus: "unfinished" | "finished";
  private name: string;
  private dueDate: Date;
  private postponeCount: number;

  constructor(name?: string, dueDate?: Date) {
    if (!name || !dueDate) {
      throw new IllegalArgumentException("必須項目が設定されていません");
    }

    this.id = 1;
    this.name = name;
    this.dueDate = dueDate;
    this.taskStatus = "unfinished";
    this.postponeCount = 0;
  }

  // 延長の処理
  public postpone() {
    if (this.postponeCount >= Task.POSTPONE_MAX_COUNT) {
      throw new IllegalArgumentException("最大延長可能回数を超過しています");
    }
    this.dueDate.setDate(this.dueDate.getDate() + 1);
    this.postponeCount++;
  }
}
