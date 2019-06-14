import trends from "@/mockups/trends.js";

export default class TrendsService {

    async getLatestTrends() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(trends);
            }, 1000);
        });
    }
}
