import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TransactionHistory = ({ trades }) => {
  return (<Card>
    <CardHeader>
      <CardTitle>Transaction History</CardTitle>
    </CardHeader>
    <CardContent>
              <div className="space-y-4">
                {trades.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    No transactions yet
                  </div>
                ) : (
                  trades.map((trade) => (
                    <div
                      key={trade.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-2 rounded-full ${
                            trade.type === "buy" ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {trade.type === "buy" ? (
                            <ChevronUp className="text-green-500" />
                          ) : (
                            <ChevronDown className="text-red-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {trade.type === "buy" ? "Bought" : "Sold"}{" "}
                            {trade.token}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(trade.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={
                            trade.type === "buy"
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {trade.amount.toFixed(4)} {trade.token}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Total: ${(trade.amount * trade.price).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
    </CardContent>
</Card>
    );
};

export default TransactionHistory;     
