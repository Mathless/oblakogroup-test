export interface category {
  title: string;
  id: string;
}

export interface categoryWithTask extends category {
  todos: [
    {
      isCompleted: boolean;
      text: string;
      id: string;
    }
  ];
}

export interface todo {
  isCompleted: boolean;
  text: string;
  id: string;
}

export interface createTask {
  categoryName: string;
  text: string;
}
