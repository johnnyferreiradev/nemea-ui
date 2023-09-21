import { Meta, StoryObj } from '@storybook/react';

import Loader from '../../Loader';

import { Table } from '../index';
import { TableRootProps } from './types';

export default {
  title: 'Components/Table/TableRoot',
  component: Table.Root,
  tags: ['autodocs'],
} as Meta<TableRootProps>;

export const Default: StoryObj<TableRootProps> = {
  args: {
    children: (
      <>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="font-medium">INV001</Table.Cell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell className="text-right">$250.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">INV002</Table.Cell>
            <Table.Cell>Pending</Table.Cell>
            <Table.Cell>PayPal</Table.Cell>
            <Table.Cell className="text-right">$150.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">INV003</Table.Cell>
            <Table.Cell>Unpaid</Table.Cell>
            <Table.Cell>Bank Transfer</Table.Cell>
            <Table.Cell className="text-right">$350.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

export const WithCaption: StoryObj<TableRootProps> = {
  args: {
    children: (
      <>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="font-medium">INV001</Table.Cell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell className="text-right">$250.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">INV002</Table.Cell>
            <Table.Cell>Pending</Table.Cell>
            <Table.Cell>PayPal</Table.Cell>
            <Table.Cell className="text-right">$150.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">INV003</Table.Cell>
            <Table.Cell>Unpaid</Table.Cell>
            <Table.Cell>Bank Transfer</Table.Cell>
            <Table.Cell className="text-right">$350.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

export const Loading: StoryObj<TableRootProps> = {
  args: {
    children: (
      <>
        <Table.Loader show>
          <Loader />
        </Table.Loader>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="font-medium">INV001</Table.Cell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell className="text-right">$250.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">INV002</Table.Cell>
            <Table.Cell>Pending</Table.Cell>
            <Table.Cell>PayPal</Table.Cell>
            <Table.Cell className="text-right">$150.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">INV003</Table.Cell>
            <Table.Cell>Unpaid</Table.Cell>
            <Table.Cell>Bank Transfer</Table.Cell>
            <Table.Cell className="text-right">$350.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};
