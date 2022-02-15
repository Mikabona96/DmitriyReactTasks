import React, { FC } from 'react';

class Developer {
    completedTasks: string[] = [];
    completeTask(task: string) {
        // eslint-disable-next-line react/no-this-in-sfc
        this.completedTasks?.push(task);
    }
}

export const Task2: FC = () => {
    // function Developer() {
    //     // eslint-disable-next-line react/no-this-in-sfc
    //     this.completedTasks = [];
    // }

    // Developer.prototype.completeTask = function(task: string) {
    //     // eslint-disable-next-line react/no-this-in-sfc
    //     this.completedTasks.push(task);
    // };

    const developer1 = new Developer();
    const developer2 = new Developer();

    developer1.completeTask('finish a feature');
    developer1.completeTask('refactor code');
    developer2.completeTask('fix bug');

    console.log(developer1.completedTasks.length);
    console.log(developer2.completedTasks.length);


    return (
        <h1>
            Task 2 result in console made on classes
        </h1>
    );
};

