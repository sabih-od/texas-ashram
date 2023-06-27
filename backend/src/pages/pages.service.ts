import {Inject, Injectable} from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Page} from "./entities/page.entity";

@Injectable()
export class PagesService {
    constructor(
        @Inject('PAGE_REPOSITORY')
        private pageRepository: Repository<Page>,
    ) {}

    async create(createPageDto: CreatePageDto): Promise<any> {
        try {
            const page = await this.pageRepository.create(createPageDto);

            await this.pageRepository.save(page);

            return await this.findOne(page.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        const [data, total] = await this.pageRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            total,
            currentPage: page,
            totalPages,
        };
    }

    async findOne(id: number): Promise<any> {
        try {
            return await this.pageRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Page Not Found'
                };
            }
        }
    }

    async update(id: number, updatePageDto: UpdatePageDto): Promise<any> {
        try {
            const page = await this.findOne(id);

            if (page.error) {
                return page;
            }

            await this.pageRepository.update(page, updatePageDto);

            return await this.findOne(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async remove(id: number): Promise<any> {
        const page = await this.findOne(id);

        if (page.error) {
            return page;
        }

        return await this.pageRepository.delete(page);
    }

    async seed(): Promise<any> {
        let app_url = process.env.APP_URL + ':' + process.env.PORT;

        const content = [
            {key: "h1", value: "What We Believe"},
            {key: "image", value: app_url + "/images/about/about-image-01.jpg"},
            {key: "h2", value: "Our Mission"},
            {key: "p", value: "<strong>Morning Watch</strong>At 7:00 a.m. Sunday thru Thursday, A time of reflection, Witnessing, and teaching will be held to start the day. \n<strong>Open Heart </strong>Saturday afternoon participants open their hearts to the group, expressing needs and sharing blessings. This time lays the groundwork for the closeness and bonding of our time together. \n<strong>Bible Hour</strong>A time for an in-depth Bible study led by a qualified teacher of the week. \n<strong>Bible Discussion Groups</strong>After the Bible Hour, your group will meet to discuss and apply what was taught by the Bible teacher. \n<strong>Prayer Groups (Confidential)</strong>Groups which allow participants to encourage each other in faith and pray for each other in love. What is said is lifted to the Lord and left with Him. \n<strong>Evangelistic Sermons</strong>Stir the soul and rekindle the fire of our faith. Christian Ashram evangelists are dynamic, bold and relevant in their proclamation. \n<strong>Healing and Wholeness</strong>Wednesday Night all participants are given the opportunity to receive physical, emotional, mental and spiritual healing. \n<strong>Overflowing Heart</strong>A time during the retreat when those who have been blessed during the Christian Ashram are given the opportunity to share what God has done in their lives. \n<strong>24-Hour Prayer</strong>Vigil From the start, participants will volunteer to pray in one-hour blocks inside the prayer vigil for the Ashram, its members and oneself. \n<strong>Work hour 'Labor of Love'</strong>After lunch, we join together in a time of fun and labor to help beautify the camp. Lawyer and construction worker shed our worldly titles to join together in Kingdom service. \n"},
            {key: "image", value: app_url + "/images/about/about-image-02.jpg"},
            {key: "h2", value: "What Is A Christian Ashram?"},
            {key: "p", value: "It is a disciplined Christian experience held in a retreat setting for the purpose of deeper spiritual growth which makes God more real in daily living. This provides a break from the hustle and bustle of everyday life and a move toward the grace and presence of Jesus Christ.\n What can I expect at a Christian Ashram?"},
        ];
        let about_page;

        try {
            about_page = await this.pageRepository.findOneOrFail({
                where: {
                    name: 'about'
                }
            });

            about_page.content = JSON.stringify(content);
            await this.pageRepository.save(about_page);

            return about_page;
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                let about_page = await this.pageRepository.create({
                    name: 'about',
                    content: JSON.stringify(content)
                });

                await this.pageRepository.save(about_page);

                return about_page;
            }
        }
    }

    async getByName(name: string): Promise<any> {
        try {
            return await this.pageRepository.findOneOrFail({
                where: {
                    name: name
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Page Not Found'
                };
            }
        }
    }
}
