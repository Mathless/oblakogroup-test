export interface category {
  title: string;
}

export interface categoryWithTask extends category {
  todos: [
    {
      isCompleted: boolean;
      text: string;
    }
  ];
}

export interface todo {
  isCompleted: boolean;
  text: string;
}
