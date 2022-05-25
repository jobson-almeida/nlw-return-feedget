import express from "express";

import { makeShowFeedbackUseCase } from "@/factories/show-feedback-factory";
import { makeUpdateFeedbackUseCase } from "@/factories/update-feedback-factory";
import { makeDeleteFeedbackUseCase } from "@/factories/delete-feedback-factory";
import { makeCreateFeedbackUseCase } from "@/factories/create-feedback-factory";
import { makeSelectFeedbacksUseCase } from "@/factories/select-feedback-factory";
import { AxiosError } from "axios";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const { createFeedbackUseCase } = makeCreateFeedbackUseCase();
  let errorDescription = "";

  try {
    await createFeedbackUseCase.execute({ type, comment, screenshot });
    return res.status(201).send();
    //}catch (err) {
    //} return res.status(400).json({ message: "err" });
    // }

  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      errorDescription = error.response.data;
    } else if (error.request) {
      console.log(error.request);
      errorDescription = error.request;
    } else if (error.config) {
      console.log(error.config);
      errorDescription = error.config;
    } else {
      console.log('Error', error.message);
      errorDescription = error.message;
    }
    return res.status(400).json({ message: errorDescription });
  };
});

routes.get("/feedbacks", async (req, res) => {
  const { selectFeedbacksUseCase } = makeSelectFeedbacksUseCase();
  try {
    const feedbacks = await selectFeedbacksUseCase.execute();
    return res.status(200).send(feedbacks);
  } catch (err) {
    return res.status(400).json({ message: "err" });
  }
});

routes.get("/feedbacks/:id", async (req, res) => {
  const { id } = req.params;
  const { showFeedbackUseCase } = makeShowFeedbackUseCase();
  try {
    const feedback = await showFeedbackUseCase.execute(id);
    return res.status(200).send(feedback);
  } catch (err) {
    return res.status(400).json({ message: "err" });
  }
});

routes.put("/feedbacks/:id", async (req, res) => {
  const { id } = req.params;
  const { type, comment, screenshot } = req.body;
  const { updateFeedbackUseCase } = makeUpdateFeedbackUseCase();
  try {
    await updateFeedbackUseCase.execute({
      id,
      type,
      comment,
      screenshot,
    });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: "err" });
  }
});

routes.delete("/feedbacks/:id", async (req, res) => {
  const { id } = req.params;
  const { deleteFeedbackUseCase } = makeDeleteFeedbackUseCase();
  try {
    await deleteFeedbackUseCase.execute(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

