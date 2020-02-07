let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

function solution(argument) {
    let result = [];

    if (argument === 'upvote') {
        this.upvotes += 1;
    } else if (argument === 'downvote') {
        this.downvotes += 1;
    } else if (argument === 'score') {
        let totalScore = this.upvotes - this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;
        let rating = '';

        if (totalVotes > 50) {
            let greater = Math.max(this.upvotes, this.downvotes);

            let addition = Math.ceil(greater * 0.25);
            result.push(this.upvotes + addition);
            result.push(this.downvotes + addition);
            result.push(totalScore);
        } else {
            result.push(this.upvotes);
            result.push(this.downvotes);
            result.push(totalScore);
        }

        let majority = (totalVotes * 6.6) / 10;

        if (this.upvotes > majority) {
            rating = 'hot';
        } else if (majority >= this.upvotes && totalScore >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (totalScore < 0) {
            rating = 'unpopular';
        }

        if (totalVotes < 10 || rating === '') {
            rating = 'new';
        }


        result.push(rating);
        return result;
    }
}

console.log(solution.call(forumPost, 'score'));
solution.call(forumPost, 'downvote');
console.log(solution.call(forumPost, 'score'));
solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
console.log(solution.call(forumPost, 'score'));

for (let i = 0; i < 38; i++) {
    solution.call(forumPost, 'upvote');
}

console.log(solution.call(forumPost, 'score'));

solution.call(forumPost, 'downvote');
console.log(solution.call(forumPost, 'score'));

console.log(forumPost.upvotes);
console.log(forumPost.downvotes);

forumPost.upvotes = 132;
forumPost.downvotes = 68;

console.log(solution.call(forumPost, 'score'));

forumPost.upvotes = 133;

console.log(solution.call(forumPost, 'score'));
