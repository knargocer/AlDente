import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { toOrderDto } from './dto/to-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly OrderModel: Model<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { date, client_username, price, orderitems, cook_username, done } =
      createOrderDto;

    const newOrder = new this.OrderModel({
      date,
      client_username,
      price,
      orderitems,
      cook_username,
      done,
    });
    const order = await newOrder.save();
    return toOrderDto(order);
  }

  async findAll() {
    const orders = await this.OrderModel.find();
    return orders;
  }

  async findOne(id: string) {
    const order = await this.OrderModel.findById(id);
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const { done } = updateOrderDto;
    const orderToUpdate = await this.findOne(id);
    orderToUpdate.done = done;
    orderToUpdate.save();
  }

  async remove(id: number) {
    const result = await this.OrderModel.deleteOne({ _id: id }).exec();
    if (!result) {
      throw new NotFoundException('There is no such an order');
    }
  }
}
