import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { OrderItem } from './entities/order-item.entity';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { toOrderItemDto } from './dto/to-order-item.dto';
import mongoose from 'mongoose';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectModel('OrderItem') private readonly OrderItemModel: Model<OrderItem>,
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    const { amount, name, price, client_username, cook_username } =
      createOrderItemDto;

    const newOrderItem = new this.OrderItemModel({
      amount,
      name,
      price,
      client_username,
      cook_username,
    });
    const orderItem = await newOrderItem.save();
    return toOrderItemDto(orderItem);
  }

  async findAll() {
    const orderItems = await this.OrderItemModel.find();
    return orderItems;
  }

  async findOne(id: number) {
    const orderItem = await this.OrderItemModel.findById(id);
    return orderItem;
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return `This action updates a #${id} order-item`;
  }

  async remove(id: string) {
    const result = await this.OrderItemModel.deleteOne({ _id: id });

    if (!result) {
      throw new NotFoundException('There is no such an order-item');
    }
    return result;
  }
}
