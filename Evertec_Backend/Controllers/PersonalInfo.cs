using DataAccess;
using DataAccess.Entity;
using Microsoft.AspNetCore.Mvc;
using Models.Request;
using Models.Response;

namespace Evertec_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalInfo : ControllerBase
    {
        [HttpPost]
        public IActionResult Create(PersonalInfoRequest model)
        {
            DataResponse res = new();
            try
            {
                using (EvertecCTX db = new())
                {
                    PersonInformation personInfo = new()
                    {
                        Id = model.Id,
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        Birth = model.Birth,
                        Photo = model.Photo,
                        MaritalStatus = model.MaritalStatus,
                        HasSiblings = model.HasSiblings,
                    };
                    db.personInformation.Add(personInfo);
                    db.SaveChanges();

                    res.Success = true;
                    res.Message = "Guardado Correcto";
                }
            }
            catch (Exception e)
            {
                res.Message = "Exepcion: " + e.Message;
            }
            return Ok(res);
        }

        [HttpGet]
        public IActionResult Read()
        {
            DataResponse res = new();
            try
            {
                using (EvertecCTX db = new())
                {
                    res.Data = db.personInformation.OrderByDescending(d => d.Id).ToList();
                    res.Success = true;
                    res.Message = "Consulta Correcta";
                }

            }
            catch (Exception e)
            {
                res.Message = "Exepcion: " + e.Message;
            }
            return Ok(res);
        }

        [HttpPut]
        public IActionResult Update(PersonalInfoRequest model)
        {
            DataResponse res = new();
            try
            {
                using (EvertecCTX db = new())
                {
                    PersonInformation personInfo = db.personInformation.Find(model.Id) ?? new();
                    personInfo.Id = model.Id;
                    personInfo.FirstName = model.FirstName;
                    personInfo.LastName = model.LastName;
                    personInfo.Birth = model.Birth;
                    personInfo.Photo = model.Photo;
                    personInfo.MaritalStatus = model.MaritalStatus;
                    personInfo.HasSiblings = model.HasSiblings;
                    db.Entry(personInfo).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();

                    res.Success = true;
                    res.Message = "Actualizado Correcto";
                }

            }
            catch (Exception e)
            {
                res.Message = "Exepcion: " + e.Message;
            }
            return Ok(res);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            DataResponse res = new();
            try
            {
                using (EvertecCTX db = new())
                {
                    PersonInformation dataInfo = db.personInformation.Find(id) ?? new();
                    db.personInformation.Remove(dataInfo);
                    db.SaveChanges();

                    res.Success = true;
                    res.Message = "Borrado Correcto";
                }

            }
            catch (Exception e)
            {
                res.Message = "Exepcion: " + e.Message;
            }
            return Ok(res);
        }
    }
}
