import React from "react";
import Layout from "../Layout";
import { Box, Typography, Card } from "@mui/material";

function Rules(props) {
  return (
    <Layout>
      <Card sx={{ p: 3, boxShadow: "none" }} className="rmui-card">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Правила роботи
        </Typography>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">1. Робочий графік</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Оператор зобов'язаний виходити на зміну згідно із затвердженим графіком.
            Невихід у зміну без попередження карається штрафом у розмірі 500 грн.
            Графік складається супервайзером та погоджується за два тижні наперед.
          </Typography>
        </Box>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">2. Робота в CRM-системі</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Вхід у CRM-систему дозволяється не раніше ніж за 5 хвилин до початку зміни.
            Вихід із системи здійснюється чітко за закінченням зміни.
            Всі дії в системі мають бути відповідно до стандартів обробки заявок.
          </Typography>
        </Box>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">3. Завершення зміни</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Завчасне завершення зміни можливе лише після погодження з керівником.
            Самовільне залишення зміни без попередження призводить до штрафу у розмірі ставки
            за недопрацьовані години та обов'язкового перенесення годин для відпрацювання.
          </Typography>
        </Box>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">4. Виконання робочих годин</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Оператор зобов'язаний повністю відпрацьовувати встановлену кількість годин.
            Ставка за невідпрацьовані години віднімається в кінці кожної виплати або вираховується.
            Не відпрацьовані години переносяться для обов'язкового закриття згідно потреб компанії.
          </Typography>
        </Box>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">5. Зміни у графіку</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Коригування можливі тільки за погодженням керівника.
            Самовільна зміна графіку розцінюється як прогул.
            "Про зміну в графіку необхідно повідомляти: завчасно (за добу) у разі планованої зміни;
            не пізніше ніж за 2 години до початку зміни у разі форс-мажору."
          </Typography>
        </Box>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">6. Відпрацювання пропущених годин</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Всі пропущені години мають бути відпрацьовані протягом однієї виплати.
            У виключних випадках строки можуть бути скориговані за погодженням керівника.
            "Відпрацювання призначається відповідно до потреб компанії та побажанням оператора."
          </Typography>
        </Box>
        <Box className="border-bottom" sx={{ mb: 2, pb: 2 }}>
          <Typography variant="h6">7. Робота у вихідні дні</Typography>
          <Typography sx={{ maxWidth: "550px" }}>
            Графік на вихідні складається щотижня.
            Керівник має право переносити зміни будніх днів на суботу чи неділю відповідно до потреб компанії.
          </Typography>
        </Box>
      </Card>
    </Layout>
  );
}

export default Rules;
